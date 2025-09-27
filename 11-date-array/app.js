const arr = ["30-12-2023", "11/06/1995", "текст", "40/10/2021", "11.03.2000"];

const validData = (Array) => {
  const operationsWithDate = Array.filter((element) => {
    if (
      element.includes("-") ||
      element.includes(".") ||
      element.includes("/")
    ) {
      return element;
    }
  })
    .map((el) => {
      if (el.includes("-")) {
        let arrayAfterSplit = el.split("-");
        if (
          arrayAfterSplit[0] <= 31 &&
          arrayAfterSplit[0] > 0 &&
          arrayAfterSplit[1] > 0 &&
          arrayAfterSplit[1] <= 12 &&
          arrayAfterSplit[2] <= 2025 &&
          arrayAfterSplit[2] > 0 &&
          arrayAfterSplit.length === 3
        ) {
          return arrayAfterSplit.join("-");
        } else {
          return "Неверный формат даты";
        }
      }
      if (el.includes("/")) {
        let arrayAfterSplit = el.split("/");
        if (
          arrayAfterSplit[0] <= 31 &&
          arrayAfterSplit[0] > 0 &&
          arrayAfterSplit[1] > 0 &&
          arrayAfterSplit[1] <= 12 &&
          arrayAfterSplit[2] <= 2025 &&
          arrayAfterSplit[2] > 0 &&
          arrayAfterSplit.length === 3
        ) {
          return arrayAfterSplit.join("-");
        } else {
          return "Неверный формат даты";
        }
      }
      if (el.includes(".")) {
        let arrayAfterSplit = el.split(".");
        if (
          arrayAfterSplit[0] <= 31 &&
          arrayAfterSplit[0] > 0 &&
          arrayAfterSplit[1] > 0 &&
          arrayAfterSplit[1] <= 12 &&
          arrayAfterSplit[2] <= 2025 &&
          arrayAfterSplit[2] > 0 &&
          arrayAfterSplit.length === 3
        ) {
          return arrayAfterSplit.join("-");
        } else {
          return "Неверный формат даты";
        }
      }
    })
    .filter((el) => el !== "Неверный формат даты");
  return operationsWithDate;
};

console.log(validData(arr));
