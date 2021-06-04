const MongoClient = require('mongodb').MongoClient
const MONGODB_URI = process.env.MONGODB_URI

let cachedDb = null

const connectToDatabase = async (uri) => {
  if (cachedDb) return cachedDb

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  cachedDb = client.db('testnet')

  return cachedDb
}

const queryDatabase = async (db) => {
  const DONKApproval = await db.collection('DONKApproval').find({}).toArray()
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(DONKApproval),
  }
}

const deleteCoin = async (db, data) => {
  const body = {
    address: data.address,
    hash: data.hash,
  }
  console.log('🚀 ~ file: add.js ~ line 35 ~ deleteCoin ~ body', body)

  if (data.address && data.hash === 'DONKVPPRO') {
    await db.collection('DONKApproval').remove({ _id: data.address })
    return { statusCode: 201 }
  } else {
    return { statusCode: 422 }
  }
}

const pushToDatabase = async (db, data) => {
  const body = {
    _id: data.coinAddress,
    coinName: data.coinName,
    coinAddress: data.coinAddress,
    coinLogo: data.coinLogo,
    coinWebsite: data.coinWebsite,
    passWord: data.hash,
  }
  if (body.coinName && body.coinAddress && body.coinLogo && body.passWord === 'DONKVPPRO') {
    const d = {
      _id: data.coinAddress,
      coinName: data.coinName,
      coinAddress: data.coinAddress,
      coinLogo: data.coinLogo,
      coinWebsite: data.coinWebsite,
    }
    await db.collection('DONKApproval').insertMany([d])
    return { statusCode: 201 }
  } else {
    return { statusCode: 422 }
  }
}

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  const db = await connectToDatabase(MONGODB_URI)

  switch (event.httpMethod) {
    case 'GET':
      return queryDatabase(db)
    case 'POST':
      return pushToDatabase(db, JSON.parse(event.body))
    case 'DELETE':
      return deleteCoin(db, JSON.parse(event.body))
    default:
      return { statusCode: 400 }
  }
}

/*
name-price-mcap-csupply-trade
coin name
coin address
trade button
coin logo - maxSize 500kb - base64 
seal of approval stamp
*/
