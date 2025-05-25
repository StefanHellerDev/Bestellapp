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
