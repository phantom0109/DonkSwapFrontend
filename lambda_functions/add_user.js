const MongoClient = require('mongodb').MongoClient
const MONGODB_URI = process.env.MONGODB_URI

let cachedDb = null

const connectToDatabase = async (uri) => {
  if (cachedDb) return cachedDb

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })

  cachedDb = client.db('testnet')

  return cachedDb
}

const queryDatabase = async (db) => {
  const DONKUser = await db.collection('DONKUser').find({}).toArray()

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(DONKUser),
  }
}

const pushToDatabase = async (db, data) => {
  const DONKUserData = {
    name: data.name,
    number: data.number,
  }

  if (DONKUserData.name && DONKUserData.number) {
    await db.collection('DONKUser').insertMany([data])
    return { statusCode: 201 }
  } else {
    return { statusCode: 422 }
  }
}

module.exports.handler = async (event, context) => {
  // otherwise the connection will never complete, since
  // we keep the DB connection alive
  context.callbackWaitsForEmptyEventLoop = false

  const db = await connectToDatabase(MONGODB_URI)

  switch (event.httpMethod) {
    case 'GET':
      return queryDatabase(db)
    case 'POST':
      return pushToDatabase(db, JSON.parse(event.body))
    default:
      return { statusCode: 400 }
  }
}
