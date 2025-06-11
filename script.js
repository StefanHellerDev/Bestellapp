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
    } else {areAllAmountsZero = true}
  }
}

function renderBasketTemplate(basketContent, dishesIndex, dishesPrice) {
  basketContent.innerHTML += `
    <div class="dishEntryInBasket">
      <h4>${dishes[dishesIndex].name}</h4>
        <div class="amountsPrice">
          <img src="./assets/icons/211863_minus_round_icon.png" alt="amount minus" onclick="reduceAmount(${dishesIndex})">
          ${dishes[dishesIndex].amount}x
          <img src="./assets/icons/211877_plus_round_icon.png" alt="amount plus" onclick="addAmount(${dishesIndex})">
          ${dishesPrice} €
          <img src="./assets/icons/3643729_bin_delete_garbage_rubbish_trash_icon.png" alt="trash bin" onclick="trashAmount(${dishesIndex})">
        </div>
    </div>
    `;
}

function renderBasketFooterTemplate(
  dishesTotalPrice,
  dishesTotalPriceWithShipping
) {
  basketContent.innerHTML += `
    <div class="BasketFooter">
      <table>
        <tr><td class="tdLeft">Zwischensumme</td><td class="tdRight">${dishesTotalPrice} €</td></tr>
        <tr><td class="tdLeft">Lieferkosten</td><td class="tdRight">5,00 €</td></tr>
        <tr><td class="tdLeft bold">Gesamt</td><td class="tdRight bold">${dishesTotalPriceWithShipping} €</td></tr>
      </table>
      
    </div>
  `;
}
