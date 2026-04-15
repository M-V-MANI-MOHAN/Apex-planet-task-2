let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
}
let cart = [];

function addToCart(productId, productName, productPrice) {
    const product = { id: productId, name: productName, price: productPrice };
    cart.push(product);

    updateCartCount();
    saveCart();

    alert(productName + " added to cart!");
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

function saveCart() {
    localStorage.setItem("cartItems", JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem("cartItems");
    if (saved) cart = JSON.parse(saved);

    updateCartCount();
}

window.onload = loadCart;