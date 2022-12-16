const range = document.getElementById("range");
const views = document.getElementById("views");
const price = document.getElementById("price");
const checkbox = document.getElementById("checkbox");
const discountLabel = document.getElementById("25_label");

let checkboxModifier = 1;
let rangeValue = 0;

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    checkboxModifier = 0.75;
    adjustment();
  } else {
    checkboxModifier = 1;
    adjustment();
  }
});

range.addEventListener("change", () => {
  rangeValue = range.value;
  adjustment();
});

function adjustment() {
  if (rangeValue < 20) {
    views.innerHTML = "10K  PAGEVIEWS";
    price.innerHTML = `$ ${8 * checkboxModifier}`;
  } else if (20 < rangeValue && rangeValue < 40) {
    views.innerHTML = "50K PAGEVIEWS";
    price.innerHTML = `$ ${12 * checkboxModifier} `;
  } else if (40 < rangeValue && rangeValue < 60) {
    views.innerHTML = "100K PAGEVIEWS";
    price.innerHTML = `$ ${16 * checkboxModifier} `;
  } else if (60 < rangeValue && rangeValue < 80) {
    views.innerHTML = "500K PAGEVIEWS";
    price.innerHTML = `$ ${24 * checkboxModifier} `;
  } else if (80 < rangeValue && rangeValue <= 100) {
    views.innerHTML = "1M PAGEVIEWS";
    price.innerHTML = `$ ${36 * checkboxModifier} `;
  }
}

window.addEventListener("change", mediaCheck());

function mediaCheck() {
  if (window.innerWidth < 700) {
    console.log("match");
    discountLabel.innerHTML = "25";
  }
}
