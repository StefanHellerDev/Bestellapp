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
}


function basket() {
  basketContent = document.getElementById("basketContent");  
  checkAmounts();
  if (areAllAmountsZero == true) {
    renderEmptyBasketTemplate(basketContent);
  }
  for (let dishesIndex = 0; dishesIndex < dishes.length; dishesIndex++) {
    if (dishes[dishesIndex].amount != 0) {
      let basketPrice = dishes[dishesIndex].amount * dishes[dishesIndex].price;
      basketPrice = basketPrice.toFixed(2);
      basketPrice = basketPrice.replace(".", ",");
      renderBasketTemplate(basketContent, dishesIndex, basketPrice);
    }
  }
}


function checkAmounts() {
  for (i = 0; i < dishes.length; ++i) {
    if (dishes[i].amount !== 0) {
      areAllAmountsZero = false;
      break;
    }
  }
}


function renderBasketTemplate(basketContent, dishesIndex, basketPrice) {
  basketContent.innerHTML += `
    <div class="dishEntryInBasket">
            <h4>${dishes[dishesIndex].name}</h4>
            <div class="amountsPrice">
              <img src="./assets/icons/211863_minus_round_icon.png" alt="amount minus">
              ${dishes[dishesIndex].amount}x
              <img src="./assets/icons/211877_plus_round_icon.png" alt="amount plus" onclick="addAmount(${dishesIndex})">
              ${basketPrice} €
              <img src="./assets/icons/3643729_bin_delete_garbage_rubbish_trash_icon.png" alt="trash bin">
            </div>
          </div>
    `;
}
