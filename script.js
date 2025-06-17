let areAllAmountsZero = true;

function init() {
  let dishesList = document.getElementById("dishesList");
  renderDishes(dishesList);
  basket();
  overlayBasket();
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
  document.getElementById("plus" + dishesIndex).setAttribute("src", "./assets/icons/211643_checkmark_round_icon.png");
  dishes[dishesIndex].amount++;
  setTimeout(() => {
    document.getElementById("plus" + dishesIndex).setAttribute("src", "./assets/icons/211877_plus_round_icon.png");
  }, 800);
  basket();
  overlayBasket();
}

function reduceAmount(dishesIndex) {
  document.getElementById("plus" + dishesIndex).setAttribute("src", "./assets/icons/211643_checkmark_round_icon.png");
  dishes[dishesIndex].amount--;
  setTimeout(() => {
    document.getElementById("plus" + dishesIndex).setAttribute("src", "./assets/icons/211877_plus_round_icon.png");
  }, 800);
  basket();
  overlayBasket();
}

function trashAmount(dishesIndex) {
  document.getElementById("plus" + dishesIndex).setAttribute("src", "./assets/icons/211643_checkmark_round_icon.png");
  dishes[dishesIndex].amount = 0;
  setTimeout(() => {
    document.getElementById("plus" + dishesIndex).setAttribute("src", "./assets/icons/211877_plus_round_icon.png");
  }, 800);
  basket();
  overlayBasket();
}

function basket() {
  let dishesTotalPrice = 0;
  let basketContent = document.getElementById("basketContent");
  checkAmounts();
  basketContent.innerHTML = "";
  if (areAllAmountsZero == true) {
    renderEmptyBasketTemplate(basketContent);
  }
  dishesTotalPrice = calculateRenderBasket(dishesTotalPrice, basketContent);
  let dishesTotalPriceWithShipping = dishesTotalPrice + 5;
  dishesTotalPrice = priceFixReplace(dishesTotalPrice);
  dishesTotalPriceWithShipping = priceFixReplace(dishesTotalPriceWithShipping);
  checkAmounts();
  if (areAllAmountsZero == false) {
    renderBasketFooterTemplate(basketContent, dishesTotalPrice, dishesTotalPriceWithShipping);
  }
}

function calculateRenderBasket(dishesTotalPrice, basketContent) {
  for (let dishesIndex = 0; dishesIndex < dishes.length; dishesIndex++) {
    if (dishes[dishesIndex].amount != 0) {
      let dishesPrice = dishes[dishesIndex].amount * dishes[dishesIndex].price;
      dishesTotalPrice = dishesTotalPrice + dishesPrice;
      dishesPrice = priceFixReplace(dishesPrice);
      renderBasketTemplate(basketContent, dishesIndex, dishesPrice);
    }
  }
  return dishesTotalPrice;
}

function priceFixReplace(price) {
  price = price.toFixed(2);
  price = price.replace(".", ",");
  return price;
}

function overlayBasket() {
  let dishesTotalPrice = 0;
  let overlayBasketContent = document.getElementById("overlayBasketContent");
  checkAmounts();
  overlayBasketContent.innerHTML = "";
  if (areAllAmountsZero == true) {
    renderEmptyBasketTemplate(overlayBasketContent);
  }
  dishesTotalPrice = calculateRenderBasket(dishesTotalPrice, overlayBasketContent);
  let dishesTotalPriceWithShipping = dishesTotalPrice + 5;
  dishesTotalPrice = priceFixReplace(dishesTotalPrice);
  dishesTotalPriceWithShipping = priceFixReplace(dishesTotalPriceWithShipping);
  checkAmounts();
  if (areAllAmountsZero == false) {
    renderBasketFooterTemplate(overlayBasketContent, dishesTotalPrice, dishesTotalPriceWithShipping);
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
  document.getElementById("overlayBasket").style.display = "flex";
}

function overlayBasketOff() {
  document.getElementById("overlayBasket").style.display = "none";
}

function switchOnOverlay() {
  for (let dishesIndex = 0; dishesIndex < dishes.length; dishesIndex++) {
    dishes[dishesIndex].amount = 0;
  }
  basket();
  overlayBasket();
  let overlayRef = document.getElementById("overlay");
  overlayRef.classList.remove("d_none");
}

function switchOffOverlay() {
  let overlayRef = document.getElementById("overlay");
  overlayRef.classList.add("d_none");
}

function bubblingPropagation(event) {
  event.stopPropagation();
}
