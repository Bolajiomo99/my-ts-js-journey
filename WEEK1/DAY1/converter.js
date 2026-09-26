/* *MINI-BUILD (file: converter.js)*

Write four functions. Each one takes an input, computes, and returns a value. No function should console.log inside itself, the logging happens at the bottom when you call them.

nairaToUsd(amount): divide by a rate constant, return the result
usdToNaira(amount): multiply by the rate, return the result
celsiusToFahrenheit(celsius): multiply by 9, divide by 5, add 32, return
kgToPounds(kg): multiply by 2.20462, return

Put the exchange rate in a const at the top of the file. Call each function at the bottom and print results using template literals. Round money output with toFixed(2), and notice that toFixed returns a string, not a number.

Sanity checks that must pass:
celsiusToFahrenheit(0) is 32
celsiusToFahrenheit(100) is 212
usdToNaira(nairaToUsd(5000)) should return close to 5000. Check whether it is exactly 5000 and connect the answer to the 0.1 + 0.2 surprise.
 */

const EXCHANGE_RATE = 1650.35; // Using a messy decimal rate to demonstrate our precision test later

function nairaToUsd(amount) {
  return amount / EXCHANGE_RATE;
}

function usdToNaira(amount) {
  return amount * EXCHANGE_RATE;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function kgToPounds(kg) {
  return kg * 2.20462;
}