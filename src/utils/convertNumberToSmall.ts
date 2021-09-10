

export function convertNumberToShortString (number: number) : string {
    let newValue = number.toString();
    if (number >= 1000000) {
        const ranges = [
            { divider: 1, suffix: '' },
            { divider: 1e3, suffix: 'K' },
            { divider: 1e6, suffix: 'M' },
            { divider: 1e9, suffix: 'B' },
            { divider: 1e12, suffix: 'T' },
            { divider: 1e15, suffix: 'Q' },
            { divider: 1e18, suffix: 'Quin' }
        ];
        //find index based on number of zeros
        const index = Math.floor(Math.abs(number).toString().length / 3) - 1;
        let numString;
        (number / ranges[index].divider) % 1 > 0 ? numString = (number / ranges[index].divider).toFixed(2) :
            numString = (number / ranges[index].divider).toFixed();
        numString =
            parseInt(numString.substring(numString.indexOf('.') + 1)) === 0
                ? Math.floor(number / ranges[index].divider).toString()
                : numString;
        newValue = numString + ranges[index].suffix;
    }
    return newValue;
}



export default convertNumberToShortString