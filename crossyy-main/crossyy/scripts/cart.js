const cartWrapper = document.querySelector('.cart-wrapper')
let emptyCart = document.querySelector('.is-empty')
let cart = localStorage.getItem('cart')


window.onload = function () {
    if (cart == null){
        emptyCart.innerHTML;
    } else {
        emptyCart.remove()
    }
}
cartWrapper.insertAdjacentHTML('beforeend', cart);