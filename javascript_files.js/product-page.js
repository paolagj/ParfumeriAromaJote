const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const mlParam = params.get("ml");
const qtyParam = params.get("qty");

const product = productsData.find(p => p.id === productId);

if (product) {
  // Produkti kryesor
  document.getElementById("productImg").src = product.img;
  document.getElementById("productName").innerText = product.name;
  document.getElementById("productBrand").innerText = product.brand;
  document.getElementById("productDesc").innerText = product.desc;

  const variantSelect = document.getElementById("variantSelect");
  const selectedDiv = variantSelect.querySelector(".selected");
  const selectedText = variantSelect.querySelector(".selected-text");
  const optionsDiv = variantSelect.querySelector(".options");

  let selectedIndex = 0;

  // Render options
  product.variants.forEach((v, index) => {
    const option = document.createElement("div");
    option.className = "option";
    option.innerText = `${v.ml}ml • ${v.price} ALL`;

    option.addEventListener("click", () => {
      selectedIndex = index;
      selectedText.innerText = option.innerText;
      optionsDiv.style.display = "none";
      variantSelect.classList.remove("open");
    });

    optionsDiv.appendChild(option);
  });

  // Default selected
  selectedText.innerText = `${product.variants[0].ml}ml • ${product.variants[0].price} ALL`;

  // Override nga URL
  if (mlParam) {
    const index = product.variants.findIndex(v => v.ml == parseInt(mlParam));
    if (index !== -1) {
      selectedIndex = index;
      selectedText.innerText = `${product.variants[index].ml}ml • ${product.variants[index].price} ALL`;
    }
  }

  // Toggle dropdown
  selectedDiv.addEventListener("click", (e) => {
    e.stopPropagation(); // shmang close immediate nga document listener
    const isOpen = optionsDiv.style.display === "block";
    optionsDiv.style.display = isOpen ? "none" : "block";
    variantSelect.classList.toggle("open", !isOpen);
  });

  // Close if click outside
  document.addEventListener("click", () => {
    optionsDiv.style.display = "none";
    variantSelect.classList.remove("open");
  });

  // Vendos sasinë nga cart nëse ekziston
  if (qtyParam) {
    document.getElementById("quantity").value = qtyParam;
  }

  // Add to cart
  document.getElementById("addToCart").addEventListener("click", () => {
    const selected = selectedText.innerText;
    const variant = product.variants[selectedIndex];
    const price = variant.price;
    const ml = variant.ml;
    const quantity = parseInt(document.getElementById("quantity").value);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = cart.findIndex(item =>
      item.id === product.id &&
      item.variantMl === ml &&
      item.price === price
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity = quantity;
      cart[existingIndex].price = price;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        variant: selected,
        variantMl: ml,
        price: price,
        quantity: quantity,
        image: product.img
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    const toast = document.createElement("div");
    toast.className = "cart-toast";
    toast.innerText = `${product.name} u shtua në shportë`;
    document.getElementById("addToCart").parentElement.appendChild(toast);

    setTimeout(() => toast.remove(), 2000);
  });
}

// Related Products
function renderRelatedProducts() {
  const relatedContainer = document.getElementById("relatedProductsContainer");
  relatedContainer.innerHTML = "";

  const otherProducts = productsData.filter(p => p.id !== product.id);
  const shuffled = otherProducts.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 6);

  selected.forEach(p => {
    const firstVariant = p.variants[0];
    const div = document.createElement("div");
    div.className = "related-product-card";

    div.innerHTML = `
      <img src="${p.img}">
      <div style="padding:8px; color:#fff;">
        <h4 style="margin:0; font-size:0.9rem;">${p.name}</h4>
        <span style="font-size:0.8rem; color:#aaa;">${p.brand}</span>
        <div style="display:flex; justify-content:space-between; font-size:0.9rem; color:#5ba1ad; align-items:end; margin-top:4px;">
          <span>${firstVariant.ml}ml</span>
          <span>ALL${firstVariant.price}</span>
        </div>
      </div>
    `;

    div.addEventListener("click", () => {
      window.location.href = `product.html?id=${p.id}`;
    });

    relatedContainer.appendChild(div);
  });
}

// Inicializo
updateCartCount();
renderRelatedProducts();