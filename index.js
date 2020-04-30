// a coin is formatted as an object with the following structure:
// { coinType: "dime", year: 2014, collectorValue: 0.10}
// coinType values include "penny", "nickel", "dime", and "quarter"

// count() accepts an array of coins and a string representing coin type
// and returns the number of coins of that type
function count() {
  return;
}

// faceValue() accepts an array of coins and a string representing coin type
// and returns the total face value of all coins of that type (e.g. if the 
// array of coins contains 3 quarters, faceValue(array, "quarter") would return
// .75)
// If no value is passed for coin type, faceValue returns the total face value
// of all the coins in the array.
function faceValue() {
  return;
}

// collectorValue() accepts an array of coins and returns the total collector value
// of all the coins.
function collectorValue(coins) {
  return;
}

// mostValuable() accepts an array of coins and returns the most valuable coin in the array.
// If multiple coins are tied for the highest value, any of these coins can be returned.

function mostValuable(coins) {
  return;
}

exports.count = count;
exports.faceValue = faceValue;
exports.collectorValue = collectorValue;
exports.mostValuable = mostValuable;

