function init() {
  let dishesList = document.getElementById("dishesList");
  renderDishes(dishesList);
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
