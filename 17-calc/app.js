"use strict";

function math(operation) {
  const firstNum = Number(document.querySelector(".item_1").value);
  const secondNum = Number(document.querySelector(".item_2").value);
  let result;
  switch (operation) {
    case "plus":
      result = firstNum + secondNum;
      break;
    case "minus":
      result = firstNum - secondNum;
      break;
    case "multiply":
      result = firstNum * secondNum;
      break;

    case "division":
      if (secondNum === 0) {
        alert("Делить на ноль нельзя");
        break;
      } else {
        result = firstNum / secondNum;
        break;
      }
  }
  document.querySelector(".result").innerText = result;
  document.querySelector(".item_1").value = "";
  document.querySelector(".item_2").value = "";
}
document.querySelectorAll("button").forEach((el) => {
  el.addEventListener("click", (e) => {
    const item = e.target;
    if (item.classList.contains("button_plus")) {
      math("plus");
    } else if (item.classList.contains("button_minus")) {
      math("minus");
    } else if (item.classList.contains("button_multiply")) {
      math("multiply");
    } else if (item.classList.contains("button_division")) {
      math("division");
    }
  });
});
