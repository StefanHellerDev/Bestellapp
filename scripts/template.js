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
    `;
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
