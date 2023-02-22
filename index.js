"use strict";

const slider = document.querySelector(".range");
const check = document.querySelector(".check");
const price = document.querySelector(".price");
const time = document.querySelector(".time");

check.addEventListener("click", () => {
  if (check.checked) {
    time.textContent = "/year";
    price.textContent = "$144.00";
  } else {
    time.textContent = "/month";
    price.textContent = "$16.00";
  }
});
