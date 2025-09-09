function convertCurrency(originalCurrency, targetCurrency, summToConvert) {
  if (originalCurrency === "EUR" && targetCurrency === "RUB") {
    return summToConvert * 98.01;
  } else if (originalCurrency === "RUB" && targetCurrency === "EUR") {
    return summToConvert * 0.01;
  } else if (originalCurrency === "USD" && targetCurrency === "RUB") {
    return summToConvert * 83.7;
  } else if (originalCurrency === "RUB" && targetCurrency === "USD") {
    return summToConvert * 0.012;
  } else if (originalCurrency === "USD" && targetCurrency === "EUR") {
    return summToConvert * 0.85;
  } else if (originalCurrency === "EUR" && targetCurrency === "USD") {
    return summToConvert * 1.17;
  } else if (originalCurrency === targetCurrency) {
    return summToConvert;
  }
  return null;
}

console.log(convertCurrency("RUB", "RUB", 35));
