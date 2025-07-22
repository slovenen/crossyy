const buyButton = document.querySelector(".add-to-cart");

function handleCart(event) {
  if (event.target.hasAttribute("data-cart")) {
    buyButton.disabled = true;
    const card = event.target.closest(".container");
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".container__image").getAttribute("src"),
      title: card.querySelector(".container__title").innerText,
      text: card.querySelector(".container__text").innerText,
      price: card.querySelector(".price").innerText,
    };
    let productInfoJSON = JSON.stringify(productInfo);
    fetch("https://example", {
      method: "POST",
      body: productInfoJSON,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json)
      .then((data) => {
        console.log(data);
        cards.push(data);
        renderCards(cards);
        form.reset();
      })
      .catch(() => {
        errorText.textContent = "Произошла ошибка";
      })
      .finally(() => {
        buyButton.disabled = false;
        event.target.textContent = "В корзине";
      });
  }
}

window.addEventListener("click", handleCart);
