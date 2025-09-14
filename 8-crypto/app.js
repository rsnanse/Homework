function crypto(password) {
  const symbols = password.split("").reverse();
  if (symbols.length <= 3) {
    return "Пароль слишком короткий";
  } else {
    const firstPart = symbols.splice(1, 3);
    const result = firstPart.concat(symbols);
    return result.join("");
  }
}
const cryptoResult = crypto("пароль");
console.log(cryptoResult);

function check(cryptoResult, passwordForCheck) {
  if (cryptoResult === "Пароль слишком короткий") {
    return "Вы ввели слишком короткий пароль";
  } else {
    const symbolsCheck = cryptoResult.split("");
    const symbolsCheckSplice = symbolsCheck.splice(0, 3).reverse();
    const newSymbolCheck = symbolsCheckSplice.concat(symbolsCheck);
    const firstResult = newSymbolCheck.splice(0, 4);
    const secondResult = newSymbolCheck.reverse().concat(firstResult);
    const finalResult = secondResult.join("");
    if (finalResult === passwordForCheck) {
      return true;
    } else return false;
  }
}

console.log(check(cryptoResult, "пароль"));
