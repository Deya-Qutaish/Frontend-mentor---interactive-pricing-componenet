"use strict";

const checkBox = document.querySelector(".check");
const price = document.querySelector(".price");
const time = document.querySelector(".time");
const sliderInput = document.querySelector(".range");
const views = document.querySelector(".views");

let priceValue = 16;

sliderInput.addEventListener("input", () => {
  const value = sliderInput.value;

  if (value === "3") {
    priceValue = 16;
    views.textContent = " 100K PAGEVIEWS";
  } else if (value === "2") {
    priceValue = 12;
    views.textContent = " 50K PAGEVIEWS";
  } else if (value === "1") {
    priceValue = 8;
    views.textContent = " 10K PAGEVIEWS";
  } else if (value === "4") {
    priceValue = 24;
    views.textContent = " 500K PAGEVIEWS";
  } else if (value === "5") {
    priceValue = 36;
    views.textContent = " 1M PAGEVIEWS";
  }

  if (!checkBox.checked) {
    price.textContent = `$${priceValue.toFixed(2)}`;
  } else {
    price.textContent = `$${priceValue.toFixed(2) * 12 * 0.75}`;
  }
});

checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    time.textContent = "/year";
    price.textContent = `$${priceValue.toFixed(2) * 12 * 0.75}`;
  } else {
    time.textContent = "/month";
    price.textContent = `$${priceValue.toFixed(2)}`;
  }
});
