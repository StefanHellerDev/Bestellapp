let areAllAmountsZero = true;

function init() {
  let dishesList = document.getElementById("dishesList");
  renderDishes(dishesList);
  basket("basketContent");
  basket("overlayBasketContent");
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
  basket("basketContent");
  basket("overlayBasketContent");
}

function reduceAmount(dishesIndex) {
  document.getElementById("plus" + dishesIndex).setAttribute("src", "./assets/icons/211643_checkmark_round_icon.png");
  dishes[dishesIndex].amount--;
  setTimeout(() => {
    document.getElementById("plus" + dishesIndex).setAttribute("src", "./assets/icons/211877_plus_round_icon.png");
  }, 800);
  basket("basketContent");
  basket("overlayBasketContent");
}

function trashAmount(dishesIndex) {
  document.getElementById("plus" + dishesIndex).setAttribute("src", "./assets/icons/211643_checkmark_round_icon.png");
  dishes[dishesIndex].amount = 0;
  setTimeout(() => {
    document.getElementById("plus" + dishesIndex).setAttribute("src", "./assets/icons/211877_plus_round_icon.png");
  }, 800);
  basket("basketContent");
  basket("overlayBasketContent");
}

function basket(basketVariable) {
  let dishesTotalPrice = 0;
  let basketContent = document.getElementById(basketVariable);
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

function overlayBasketChange(param) {
  if (param == "on") {
    document.getElementById("overlayBasket").style.display = "flex";
  } else {
    document.getElementById("overlayBasket").style.display = "none";
  }
}

function switchOnOverlay() {
  for (let dishesIndex = 0; dishesIndex < dishes.length; dishesIndex++) {
    dishes[dishesIndex].amount = 0;
  }
  basket("basketContent");
  basket("overlayBasketContent");
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
