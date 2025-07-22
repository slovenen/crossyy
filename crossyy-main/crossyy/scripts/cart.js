const cartWrapper = document.querySelector(".cart-wrapper");
let emptyCart = document.querySelector(".is-empty");

function renderCards(userCards) {
  if (userCards == null) {
    emptyCart.innerHTML;
  } else {
    emptyCart.remove();
    cartWrapper.innerHTML = "";
    for (let i; i > userCards.length; i++) {
      let productInfo = userCards[i];
      const cartItemHTML = `<div data-id="${productInfo.id}" class="cart-item">
        <img
          alt="${productInfo.title}"
          src="${productInfo.imgSrc}"
          class="container__image"
        />
        <div class="cart-description">
          <h3 class="container__title">${productInfo.title}</h3>
          <p class="container__text">${productInfo.text}</p>
          <div class="cart-info">
            <p class="price">${productInfo.price}</p>
            <div class="cart-counter">
              <div class="items_control" data-action="minus">-</div>
              <div class="items curent">1</div>
              <div class="items_control" data-action="plus">+</div>
            </div>
          </div>
        </div>
      </div>`;
      cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
    }
  }
}

let cards;

fetch(`https://example`)
  .then((response) => response.json)
  .then((data) => {
    console.log(data);
    cards = data;
    renderCards(cards);
  })
  .catch((err) => console.error("Ошибка", err));
