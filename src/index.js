module.exports = function reverse (n) {
    const isNegative = n < 0;
    const reversedStr = Math.abs(n).toString().split('').reverse().join('');
    const reversedNum = parseInt(reversedStr, 10);
    return isNegative ? reversedNum : reversedNum;
}
