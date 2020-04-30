// a coin is formatted as an object with the following structure:
// { coinType: "dime", year: 2014, collectorValue: 0.10}
// coinType values include "penny", "nickel", "dime", and "quarter"

// count accepts an array of coins and a string representing coin type
// and returns the number of coins of that type
function count(coins, coinType) {
  return coins.filter(coin => coin.coinType === coinType).length;
}

// faceValue accepts an array of coins and a string representing coin type
// and returns the total face value of all coins of that type (e.g. if the 
// array of coins contains 3 quarters, faceValue(array, "quarter") would return
// .75)
function faceValue(coins, coinType) {
  const faceValue = { penny: 0.01, nickel: 0.05, dime: 0.10, quarter: 0.25 };
  console.log(faceValue[coinType]);
  return parseFloat((count(coins, coinType) * faceValue[coinType]).toFixed(2));
}

exports.count = count;
exports.faceValue = faceValue;

