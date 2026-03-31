
const perfumes = [
  { id:"9", name:"Stronger with You", brand:"Emporio Armani", gender:"male",
    variants:[ { ml:100, price:12500 }, { ml:50, price:9500 } ],
    img:"../img/parfumet/9.webp"
  },
  { 
    id:"21", name:"Naxos", brand:"Xerjoff", gender:"male",
    variants:[ { ml:100, price:24500 } ],
    img:"../img/parfumet/top10-2.webp"
  },
  { 
    id:"28", name:"Y EDP", brand:"YSL Yves Saint Laurent", gender:"male",
    variants:[ { ml:100, price:13500 } ],
    img:"../img/parfumet/top10-3.webp"
  },
  { 
    id:"44", name:"Hugo Boss Bottled", brand:"Hugo Boss", gender:"male",
    variants:[ { ml:100, price:10500 }, { ml:50, price:8000 } ],
    desc:"", img:"../img/parfumet/top10-4.webp"
  },
  { 
    id:"53", name:"Scandal Le Parfum", brand:"Jean Paul Gaultier", gender:"female",
    variants:[ { ml:100, price:14500 },{ ml:50, price:11000 } ],
    img:"../img/parfumet/top10-5.webp"
  },
  { 
    id:"59", name:"Delina EDP", brand:"Parfums de Marly",gender:"female",
    variants:[ { ml:75, price:27500 }, {ml:30,price:170} ],
    img:"../img/parfumet/top10-6.webp"
  },
  { 
    id:"95", name:"JPG Elixir", brand:"Jean Paul Gaultier", gender:"male",
    variants:[ { ml:125, price:15000 }, {ml:75, price:11500} ],
    img:"../img/parfumet/top10-7.webp"
  },
  { 
    id:"8", name:"Spicebomb Classic", brand:"Viktor & Rolf", gender:"male", 
    variants:[ { ml:100, price:12500 }, {ml:50, price:10000 }  ],
    img:"../img/parfumet/top10-8.webp"
  },
  { 
    id:"26", name:"Versace Eros Eau De Toilete", brand:"Versace", gender:"male", 
    variants:[ { ml:100, price:17000 }, { ml: 50, price: 13000 }],
    img:"../img/parfumet/26.webp"
  },
  { 
    id:"31", name:"Mancera Red Tobacco", brand:"Mancera", gender:"male",
    variants:[ { ml:120, price:15000 }, {ml:60, price:10500} ],
    img:"../img/parfumet/top10-10.webp"
  },
  ];
    // Merr të gjithë imazhet nga seksioni top-3
    document.querySelectorAll('.top-3 .img-container').forEach(container => {
      container.addEventListener('click', () => {
        const productId = container.getAttribute('data-id');
        if(productId){
          // Hap faqen e produktit me id-në e duhur
          window.location.href = `product.html?id=${productId}`;
        }
      });
    });

  const sliderContainer = document.getElementById("sliderContainer");
  
  perfumes.forEach(p => {
  
    const firstVariant = p.variants[0]; 
  
    const card = document.createElement("div");
    card.className = "perfume-card";
  
    card.innerHTML = `
    <div class="perfume-img">
      <img src="${p.img}" alt="${p.name}">
    </div>
    <div class="perfume-info">
      <span class="perfume-name">${p.name}</span>
      <span class="perfume-brand">${p.brand}</span>
      <div class="perfume-header" style="display:flex; justify-content:space-between; margin-top:4px; font-size:0.8rem; color:#5ba1ad;">
        <span>${firstVariant.ml}ml</span>
        <span>ALL ${firstVariant.price}</span>
      </div>
    </div>
  `;
  
    // Gjej produktin në productsData sipas emrit
    const matchedProduct = productsData.find(prod =>
      prod.name.toLowerCase().includes(p.name.toLowerCase())
    );
  
    if (matchedProduct) {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        window.location.href = `product.html?id=${matchedProduct.id}`;
      });
    }
  
    sliderContainer.appendChild(card);
  });
  
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  
  let currentPage = 0;
  
  // Merr cards per page sipas ekranit
  function getCardsPerPage() {
    const w = window.innerWidth;
    if(w >=1024) return 5;
    if(w >=768) return 4;
    return 1;
  }
  
  function updateSlider() {
    const cardsPerPage = getCardsPerPage();
    const cardWidth = sliderContainer.querySelector(".perfume-card").offsetWidth + 20;
    const totalPages = Math.ceil(perfumes.length / cardsPerPage);
  
    // Looping
    if(currentPage >= totalPages) currentPage = 0;
    if(currentPage < 0) currentPage = totalPages -1;
  
    sliderContainer.style.transform = `translateX(-${currentPage * cardsPerPage * cardWidth}px)`;
  }
  
  nextBtn.addEventListener("click", () => {
    currentPage++;
    updateSlider();
  });
  
  prevBtn.addEventListener("click", () => {
    currentPage--;
    updateSlider();
  });
  
  window.addEventListener("resize", () => updateSlider());
  
  // inicializo
  updateSlider();

const slides = document.querySelectorAll('.slide1');
let current = 0;

function nextSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}
// Ndryshon çdo sekonda
setInterval(nextSlide, 2500);
