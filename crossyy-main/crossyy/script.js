const buyButton = document.querySelector(".add-to-cart");
let articul = {}


function handleCart(event) {
  if (event.target.hasAttribute("data-cart")) {
    const card = event.target.closest(".container");
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".container__image").getAttribute("src"),
      title: card.querySelector(".container__title").innerText,
      text: card.querySelector(".container__text").innerText,
      price: card.querySelector(".price").innerText,
    };
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
    localStorage.setItem('cart', cartItemHTML)
    event.target.textContent = 'В корзине'
    
  }
}


window.addEventListener("click", handleCart);
