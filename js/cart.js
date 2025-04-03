 // cart.js
let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    // обновление UI корзины
    console.log(cart);
}

