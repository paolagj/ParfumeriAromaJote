// --- DOM Elements ---
const productsContainer = document.getElementById("productsContainer");
const filterPanel = document.getElementById("filterPanel");
const filterToggle = document.getElementById("filterToggle");
const genderFilter = document.getElementById("genderFilter");
const brandFilter = document.getElementById("brandFilter");
const mlFilter = document.getElementById("mlFilter");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const pagination = document.getElementById("pagination");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearSearch");

// --- Clear Filters Button ---
let clearFiltersBtn = document.createElement("button");
clearFiltersBtn.innerText = "Clear Filters";
clearFiltersBtn.id = "clearFiltersBtn";
clearFiltersBtn.style.marginLeft = "10px";
filterToggle.parentElement.appendChild(clearFiltersBtn);

// --- Variables ---
let currentPage = 1;
let perPage = 20;
const pageKey = location.pathname.includes("perfumes") ? "perfumesFilters" : "homeFilters";

// --- Normalize variants ---
productsData.forEach(p => {
  if (!Array.isArray(p.variants) && p.variants) p.variants = [p.variants];
  else if (!p.variants) p.variants = [];
});

// --- Price slider setup ---
const allPrices = productsData.flatMap(p => p.variants.map(v => v.price));
priceRange.max = Math.max(...allPrices);
priceRange.min = Math.min(...allPrices);
priceRange.value = priceRange.max;
priceValue.innerText = `Max: ALL${priceRange.value}`;

// --- Unique filter values ---
const genders = [...new Set(productsData.map(p => p.gender))];
const brands = [...new Set(productsData.map(p => p.brand))];
const mls = [20,30,50,60,75,90,100,125,150,200];

// --- Render filter checkboxes ---
genders.forEach(g => {
  const el = document.createElement("label");
  el.innerHTML = `<input type="checkbox" value="${g}">${g}`;
  genderFilter.appendChild(el);
});
brands.forEach(b => {
  const el = document.createElement("label");
  el.innerHTML = `<input type="checkbox" value="${b}">${b}`;
  brandFilter.appendChild(el);
});
mls.forEach(m => {
  const el = document.createElement("label");
  el.innerHTML = `<input type="checkbox" value="${m}">${m}ml`;
  mlFilter.appendChild(el);
});

// --- Update filter button ---
function updateFilterButtonState() {
  const hasGender = [...genderFilter.querySelectorAll("input:checked")].length > 0;
  const hasBrand = [...brandFilter.querySelectorAll("input:checked")].length > 0;
  const hasMl = [...mlFilter.querySelectorAll("input:checked")].length > 0;
  const priceChanged = priceRange.value < priceRange.max;
  const searchActive = searchInput.value.trim() !== "";

  if (hasGender || hasBrand || hasMl || priceChanged || searchActive) {
    filterToggle.innerText = "Filter - Active";
    filterToggle.style.backgroundColor = "#5ba1ad";
    filterToggle.style.color = "#fff";
  } else {
    filterToggle.innerText = "Filter";
    filterToggle.style.backgroundColor = "";
    filterToggle.style.color = "";
  }
}

// --- Toggle filter panel ---
filterToggle.addEventListener("click", () => filterPanel.classList.toggle("active"));
document.addEventListener("click", e => {
  if (!filterPanel.contains(e.target) && e.target !== filterToggle) {
    filterPanel.classList.remove("active");
  }
});

// --- Load filters from sessionStorage or URL ---
function loadFiltersFromStorage() {
  const params = new URLSearchParams(window.location.search);
  const searchQueryFromURL = params.get("search");
  const brandFromURL = params.get("brand");

  let savedFilters = JSON.parse(sessionStorage.getItem(pageKey));

  const hasActiveFilters = savedFilters &&
    (
      savedFilters.genders?.length ||
      savedFilters.brands?.length ||
      savedFilters.mls?.length ||
      savedFilters.searchQuery ||
      (savedFilters.maxPrice && savedFilters.maxPrice < priceRange.max)
    );

  if (!hasActiveFilters && (searchQueryFromURL || brandFromURL)) {
    savedFilters = {
      genders: [],
      brands: brandFromURL ? [decodeURIComponent(brandFromURL)] : [],
      mls: [],
      maxPrice: priceRange.max,
      searchQuery: searchQueryFromURL ? decodeURIComponent(searchQueryFromURL) : "",
      currentPage: 1
    };
    sessionStorage.setItem(pageKey, JSON.stringify(savedFilters));
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  if (!savedFilters) {
    savedFilters = {
      genders: [],
      brands: [],
      mls: [],
      maxPrice: priceRange.max,
      searchQuery: "",
      currentPage: 1
    };
  }

  [...genderFilter.querySelectorAll("input")].forEach(i => i.checked = savedFilters.genders.includes(i.value));
  [...brandFilter.querySelectorAll("input")].forEach(i => i.checked = savedFilters.brands.includes(i.value));
  [...mlFilter.querySelectorAll("input")].forEach(i => i.checked = savedFilters.mls.includes(parseInt(i.value)));
  priceRange.value = savedFilters.maxPrice || priceRange.max;
  searchInput.value = savedFilters.searchQuery || "";
  currentPage = savedFilters.currentPage || 1;

  updateFilterButtonState();
}

// --- Save filters to sessionStorage ---
function saveFiltersToStorage(totalPages) {
  const filters = {
    genders: [...genderFilter.querySelectorAll("input:checked")].map(i => i.value),
    brands: [...brandFilter.querySelectorAll("input:checked")].map(i => i.value),
    mls: [...mlFilter.querySelectorAll("input:checked")].map(i => parseInt(i.value)),
    maxPrice: parseInt(priceRange.value),
    searchQuery: searchInput.value.trim(),
    currentPage: Math.min(currentPage, totalPages || 1)
  };
  sessionStorage.setItem(pageKey, JSON.stringify(filters));
  updateFilterButtonState();
}

// --- Filter logic ---
function getFilteredProducts() {
  let filtered = [...productsData];
  const query = searchInput.value.trim().toLowerCase();

  if (query) {
    const words = query.split(/\s+/);
    filtered = filtered.filter(p => {
      const name = p.name.toLowerCase();
      const brand = p.brand.toLowerCase();
      const gender = p.gender.toLowerCase();
      return words.every(word =>
        name.includes(word) || brand.includes(word) || gender.includes(word) ||
        (word === "femra" && gender === "female") ||
        (word === "meshkuj" && gender === "male") ||
        (word === "unisex" && gender === "unisex")
      );
    });
  }

  const selectedGenders = [...genderFilter.querySelectorAll("input:checked")].map(i => i.value.toLowerCase());
  const selectedBrands = [...brandFilter.querySelectorAll("input:checked")].map(i => i.value.toLowerCase());
  const selectedMls = [...mlFilter.querySelectorAll("input:checked")].map(i => parseInt(i.value));
  const maxPrice = parseInt(priceRange.value);

  return filtered.filter(p => {
    if(selectedGenders.length && !selectedGenders.includes(p.gender.toLowerCase())) return false;
    if(selectedBrands.length && !selectedBrands.includes(p.brand.toLowerCase())) return false;

    const validVariants = p.variants.filter(v => {
      const mlMatch = selectedMls.length === 0 || selectedMls.includes(v.ml);
      const priceMatch = v.price <= maxPrice;
      return mlMatch && priceMatch;
    });

    if(validVariants.length === 0) return false;
    p.filteredVariants = validVariants;
    return true;
  });
}

// --- Lazy load helper ---
function lazyLoadImages() {
  const lazyImages = document.querySelectorAll('img.lazy');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          obs.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => observer.observe(img));
  } else {
    lazyImages.forEach(img => img.src = img.dataset.src);
  }
}

// --- Render products ---
function renderFilteredProducts() {
  const filtered = getFilteredProducts();
  const totalPages = Math.ceil(filtered.length / perPage) || 1;

  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const pageItems = filtered.slice(start, end);

  productsContainer.innerHTML = searchInput.value
    ? `<h2 style="color:#fff; margin-bottom:16px;">Të gjitha rezultatet për "${searchInput.value}"</h2>`
    : "";

  pageItems.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";

    const displayVariant = p.filteredVariants[0];

    div.innerHTML = `
      <a href="product.html?id=${p.id}" class="product-link">
        <img class="lazy" data-src="${p.img}" alt="${p.name}">
        <div class="product-info">
          <h4>${p.name}</h4>
          <span class="brand">${p.brand}</span>
          <div class="meta">
            <span>${displayVariant.ml}ml</span>
            <span>ALL${displayVariant.price}</span>
          </div>
        </div>
      </a>`;

    productsContainer.appendChild(div);
  });

  lazyLoadImages(); // ngarko lazy vetëm për imazhet që sapo u renderuan
  renderPagination(filtered.length);
  window.scrollTo(0, 0);
  saveFiltersToStorage(totalPages);
}

// --- Render pagination ---
function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / perPage) || 1;
  pagination.innerHTML = "";
  if (totalItems === 0) return;
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.className = "page-btn" + (i === currentPage ? " active" : "");
    btn.dataset.page = i;
    pagination.appendChild(btn);
  }
}

// --- Event listeners ---
pagination.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const page = parseInt(e.target.dataset.page);
    if (page && page !== currentPage) {
      currentPage = page;
      renderFilteredProducts();
    }
  }
});

[genderFilter, brandFilter, mlFilter].forEach(f => f.addEventListener("change", () => {
  currentPage = 1;
  renderFilteredProducts();
}));
priceRange.addEventListener("input", () => {
  priceValue.innerText = `Max: ALL${priceRange.value}`;
  currentPage = 1;
  renderFilteredProducts();
});
searchInput.addEventListener("keydown", e => {
  if(e.key === "Enter") {
    e.preventDefault();
    currentPage = 1;
    renderFilteredProducts();
  }
});
searchInput.addEventListener("input", () => {
  currentPage = 1;
  renderFilteredProducts();
});
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  currentPage = 1;
  renderFilteredProducts();
});
clearFiltersBtn.addEventListener("click", () => {
  [...genderFilter.querySelectorAll("input")].forEach(i => i.checked=false);
  [...brandFilter.querySelectorAll("input")].forEach(i => i.checked=false);
  [...mlFilter.querySelectorAll("input")].forEach(i => i.checked=false);
  priceRange.value = priceRange.max;
  searchInput.value = "";
  currentPage = 1;
  renderFilteredProducts();
});

// --- Initialize ---
loadFiltersFromStorage();
renderFilteredProducts();