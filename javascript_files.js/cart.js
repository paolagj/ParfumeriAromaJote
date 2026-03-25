let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function renderCart() {
    cartItemsContainer.innerHTML = "";

    if(cart.length === 0){
        cartItemsContainer.innerHTML = `
            <div class="empty">
                🛒 Shporta juaj është bosh.
            </div>
        `;
        cartTotal.innerText = "0";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const qty = item.quantity || 1;
        const itemTotal = item.price * qty;
        total += itemTotal;

        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
          <a href="product.html?id=${item.id}&ml=${item.variantMl}&qty=${qty}">   
          <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                    <h4>
                 ${item.name}
                </h4> </a>
                <p class="variant">${item.variant}</p>
                <p>Sasia: ${qty}</p>
                <p class="price">${itemTotal} ALL</p>
            </div>
            <button class="removeBtn" data-index="${index}">Hiq</button>
        `;

        cartItemsContainer.appendChild(div);
    });

    cartTotal.innerText = total;

    document.querySelectorAll(".removeBtn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idx = parseInt(e.target.getAttribute("data-index"));
            cart.splice(idx, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        });
    });
}

// Clear Cart
document.getElementById("clearCartBtn").addEventListener("click", () => {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
});

// Checkout
document.getElementById("checkoutBtn").addEventListener("click", () => {
    if(cart.length === 0){
        alert("Shporta juaj është bosh!");
        return;
    }
    window.location.href = "../order.html";
});

// Funksioni për numrin e produkteve në shportë
function updateCartCount() {
    const count = JSON.parse(localStorage.getItem("cart"))?.length || 0;
    const cartCountElem = document.getElementById("cartCount");
    if(cartCountElem){
        cartCountElem.innerText = count;
    }
}

// Initial render
updateCartCount();
renderCart();