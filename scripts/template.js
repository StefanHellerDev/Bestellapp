function renderDishesTemplate(dishesList, dishesIndex, dishPrice) {
  dishesList.innerHTML += `
    <div class="dishes" onclick="addAmount(${dishesIndex})">
            <div>
              <p>${dishes[dishesIndex].name}</p>
              <p>${dishes[dishesIndex].description}</p>
              <p>${dishPrice}</p>
            </div>
            <img id="plus${dishesIndex}" src="./assets/icons/211877_plus_round_icon.png" alt="add dish">
          </div>
    `;
}

function renderEmptyBasketTemplate(basketContent) {
    basketContent.innerHTML = `
    <div class="emptyBasket">
          <img src="./assets/icons/622396_bag_shopping_basket_buy_ecommerce_icon.png" alt="shoppoing basket">
          Wähle leckere Gerichte aus der Karte und bestelle dein Menü.</div>
    `
}
