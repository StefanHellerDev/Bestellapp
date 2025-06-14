let areAllAmountsZero = true;

function init() {
  let dishesList = document.getElementById("dishesList");
  renderDishes(dishesList);
  basket();
}

function renderDishes(dishesList) {
  for (let dishesIndex = 0; dishesIndex < dishes.length; dishesIndex++) {
    let dishPrice = dishes[dishesIndex].price.toFixed(2);
    dishPrice = dishPrice.replace(".", ",");
    dishPrice = dishPrice + " €";

    renderDishesTemplate(dishesList, dishesIndex, dishPrice);
  }
}

function addAmount(dishesIndex) {
  document
    .getElementById("plus" + dishesIndex)
    .setAttribute("src", "./assets/icons/211643_checkmark_round_icon.png");
  dishes[dishesIndex].amount++;
  setTimeout(() => {
    document
      .getElementById("plus" + dishesIndex)
      .setAttribute("src", "./assets/icons/211877_plus_round_icon.png");
  }, 800);
  basket();
}

function reduceAmount(dishesIndex) {
  document
    .getElementById("plus" + dishesIndex)
    .setAttribute("src", "./assets/icons/211643_checkmark_round_icon.png");
  dishes[dishesIndex].amount--;
  setTimeout(() => {
    document
      .getElementById("plus" + dishesIndex)
      .setAttribute("src", "./assets/icons/211877_plus_round_icon.png");
  }, 800);
  basket();
}

function trashAmount(dishesIndex) {
  document
    .getElementById("plus" + dishesIndex)
    .setAttribute("src", "./assets/icons/211643_checkmark_round_icon.png");
  dishes[dishesIndex].amount = 0;
  setTimeout(() => {
    document
      .getElementById("plus" + dishesIndex)
      .setAttribute("src", "./assets/icons/211877_plus_round_icon.png");
  }, 800);
  basket();
}

function basket() {
  let dishesTotalPrice = 0;
  let basketContent = document.getElementById("basketContent");
  checkAmounts();
  basketContent.innerHTML = "";
  if (areAllAmountsZero == true) {
    renderEmptyBasketTemplate(basketContent);
  }
  for (let dishesIndex = 0; dishesIndex < dishes.length; dishesIndex++) {
    if (dishes[dishesIndex].amount != 0) {
      let dishesPrice = dishes[dishesIndex].amount * dishes[dishesIndex].price;
      dishesTotalPrice = dishesTotalPrice + dishesPrice;
      dishesPrice = dishesPrice.toFixed(2);
      dishesPrice = dishesPrice.replace(".", ",");
      renderBasketTemplate(basketContent, dishesIndex, dishesPrice);
    }
  }
  let dishesTotalPriceWithShipping = dishesTotalPrice + 5;
  dishesTotalPrice = dishesTotalPrice.toFixed(2);
  dishesTotalPrice = dishesTotalPrice.replace(".", ",");
  dishesTotalPriceWithShipping = dishesTotalPriceWithShipping.toFixed(2);
  dishesTotalPriceWithShipping = dishesTotalPriceWithShipping.replace(".", ",");
  checkAmounts();
  if (areAllAmountsZero == false) {
    renderBasketFooterTemplate(dishesTotalPrice, dishesTotalPriceWithShipping);
  }
}

function checkAmounts() {
  for (i = 0; i < dishes.length; ++i) {
    if (dishes[i].amount !== 0) {
      areAllAmountsZero = false;
      break;
    } else {
      areAllAmountsZero = true;
    }
  }
}

function overlayBasketOn() {
  document.getElementById("overlayBasket").style.display = "block";
}

function overlayBasketOff() {
  document.getElementById("overlayBasket").style.display = "none";
} 