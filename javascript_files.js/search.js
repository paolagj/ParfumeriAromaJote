// --- DOM Elements ---
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// --- Normalize string ---
function normalize(str){
  return str.trim().toLowerCase();
}

// --- Get matching products ---
function getSearchMatches(query){
  if(!query) return [];
  const words = query.split(/\s+/).map(normalize);

  return productsData.filter(p => {
    const name = normalize(p.name);
    const brand = normalize(p.brand);
    const gender = normalize(p.gender);

    return words.every(word => 
      name.includes(word) || brand.includes(word) || gender.includes(word) ||
      (word==="femra" && gender==="female") ||
      (word==="meshkuj" && gender==="male") ||
      (word==="unisex" && gender==="unisex")
    );
  });
}

// --- Render search results ---
function showSearchResults(matches, query){
  searchResults.innerHTML = "";
  if(matches.length === 0){
    searchResults.style.display = "none";
    return;
  }

  matches.slice(0,6).forEach(p => {
    const div = document.createElement("div");
    const nameHighlighted = p.name.replace(new RegExp(query, "gi"), match=>`<span class="highlight">${match}</span>`);
    const brandHighlighted = p.brand.replace(new RegExp(query, "gi"), match=>`<span class="highlight">${match}</span>`);
    div.innerHTML = `${brandHighlighted} - ${nameHighlighted} (${p.gender})`;

    div.addEventListener("click", () => {
      navigateToPerfumesOrProduct(p);
    });

    searchResults.appendChild(div);
  });

  searchResults.style.display = "block";
}

// --- Navigate helper ---
function navigateToPerfumesOrProduct(product){
  const isPerfumesPage = location.pathname.includes("perfumes");

  // Save current filters for perfumes page
  if(isPerfumesPage){
    const pageKey = "perfumesFilters";
    const filters = {
      genders: [...document.querySelectorAll("#genderFilter input:checked")].map(i=>i.value),
      brands: [...document.querySelectorAll("#brandFilter input:checked")].map(i=>i.value),
      mls: [...document.querySelectorAll("#mlFilter input:checked")].map(i=>parseInt(i.value)),
      maxPrice: parseInt(document.getElementById("priceRange").value),
      searchQuery: searchInput.value.trim(),
      currentPage: 1
    };
    sessionStorage.setItem(pageKey, JSON.stringify(filters));
  }

  // Go to product page
  window.location.href = `product.html?id=${product.id}`;
}

// --- Enter key handler ---
function handleSearchEnter(){
  const query = searchInput.value.trim();
  if(!query) return;

  const matchedBrand = productsData.find(p =>
    p.brand.toLowerCase() === query.toLowerCase()
  );

  if(matchedBrand){
    window.location.href = `perfumes.html?brand=${encodeURIComponent(matchedBrand.brand)}`;
  } else {
    window.location.href = `perfumes.html?search=${encodeURIComponent(query)}`;
  }
}

// --- Event listeners ---
searchInput.addEventListener("input", (e)=>{
  const query = e.target.value;
  const matches = getSearchMatches(query);
  showSearchResults(matches, query);
});

searchInput.addEventListener("keydown", e=>{
  if(e.key === "Enter"){
    e.preventDefault();
    handleSearchEnter();
  }
});

// --- Close search on click outside ---
document.addEventListener("click",(e)=>{
  if(!searchResults.contains(e.target) && e.target!==searchInput){
    searchResults.style.display = "none";
  }
});