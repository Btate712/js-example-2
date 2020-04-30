const functions = require('./index');

const coins = [
  { coinType: "dime", year: 2005, collectorValue: 0.10 },
  { coinType: "penny", year: 2016, collectorValue: 0.01 },
  { coinType: "dime", year: 2003, collectorValue: 0.10 },
  { coinType: "quarter", year: 2019, collectorValue: 0.25 },
  { coinType: "quarter", year: 2015, collectorValue: 0.25 },
  { coinType: "penny", year: 1982, collectorValue: 0.01 },
  { coinType: "dime", year: 1902, collectorValue: 0.32 },
  { coinType: "nickel", year: 2013, collectorValue: 0.05 },
  { coinType: "nickel", year: 2005, collectorValue: 0.05 },
  { coinType: "nickel", year: 1905, collectorValue: 1.85 },
  { coinType: "penny", year: 1997, collectorValue: 0.01 },
  { coinType: "penny", year: 2014, collectorValue: 0.01 },
  { coinType: "dime", year: 2004, collectorValue: 0.10 },
  { coinType: "quarter", year: 1875, collectorValue: 34.00 },
  { coinType: "penny", year: 2005, collectorValue: 0.01 },
  { coinType: "quarter", year: 2020, collectorValue: 0.25 },
  { coinType: "nickel", year: 2005, collectorValue: 0.05 }
];

test('counts the number of coins of a specified type', () => {
  expect(functions.count(coins, "dime")).toBe(4);
});

test('sums the total face value of coins of a specified type', () => {
  expect(functions.faceValue(coins, "dime")).toBe(0.4);
});
