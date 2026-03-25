const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');

// hap / mbyll menu kur klikon hamburger
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // ndalon mbylljen e menjëhershme
  sideMenu.classList.toggle('open');
  menuBtn.classList.toggle('active');
});

// mos e mbyll kur klikon brenda menusë
sideMenu.addEventListener('click', (e) => {
  e.stopPropagation();
});

// mbyll menu kur klikon jashtë
document.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  menuBtn.classList.remove('active');
});


function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cartCount");
  cartCount.innerText = cart.length;
}

// update kur hap faqen
updateCartCount();

// update kur ndryshon localStorage (kur shtohet produkt nga faqe tjetër)
window.addEventListener("storage", updateCartCount);