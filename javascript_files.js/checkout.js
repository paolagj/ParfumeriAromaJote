//Merr produktet nga localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const orderItems = document.getElementById("orderItems");
const orderTotal = document.getElementById("orderTotal");
const deliveryInfo = document.getElementById("deliveryInfo");

//Funksion për llogaritje total dhe dërgesë
function renderOrder() {
    orderItems.innerHTML = "";
    let total = 0;

    if(cart.length === 0){
        orderTotal.innerText = `Totali: 0 ALL`;
        deliveryInfo.innerText = "";
        return { totalAmount: 0, shippingText: "" };
    }

    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "order-item";
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <p>${item.name}</p>
                <p>${item.variant}</p>
                <p>Sasia: ${item.quantity}</p>
                <p>Çmimi: ${item.price * item.quantity} ALL</p>
            </div>
        `;
        orderItems.appendChild(itemDiv);
        total += item.price * item.quantity;
    });

    const shippingText = "Posta falas! Dorëzim: Tirana brenda 24h, Rrethet 24-48h";
    orderTotal.innerText = `Totali: ${total} ALL`;
    deliveryInfo.innerText = shippingText;

    return { totalAmount: total, shippingText };
}

//Inicializo totalin
let { totalAmount, shippingText } = renderOrder();

//Autofill nga localStorage
const autofillFields = ["first_name", "last_name", "email", "phone", "phone_prefix", "city", "address"];
autofillFields.forEach(field => {
    const input = document.getElementById(
        field === "phone_prefix" ? "phonePrefixInput" :
        field === "first_name" ? "firstName" :
        field === "last_name" ? "lastName" :
        field === "phone" ? "phone" :
        field === "city" ? "cityInput" :
        "address"
    );
    input.value = localStorage.getItem(field) || (field === "phone_prefix" ? "+355" : "");
});

//Fun facts
const funFacts = [
    "Aroma e vaniljes rrit nivelin e dopaminës dhe përmirëson humorin.",
    "Trëndafili i zi përdoret për parfume misterioze dhe luksoze.",
    "Oud është një nga përbërësit më të çmuar në parfumeri.",
    "Disa parfume zgjasin deri në 48 orë në lëkurë.",
    "Përzierja e luleve dhe citrus-ve mund të rrisë qetësinë.",
    "Musk përdorej nga faraonët egjiptian për rituale luksi.",
    "Patchouli përdorej nga hippiet në vitet '60.",
    "Aromat e detit stimulojnë kujtesën dhe kreativitetin.",
    "Jasmiini ka efekt afroditik dhe relaksues.",
    "Ambra e zezë përdoret për parfume të rralla.",
    "Aromat e kafes rrisin vigjilencën dhe energjinë.",
    "Citrus largon stresin dhe lodhjen.",
    "Lavanda ndihmon gjumin dhe qetësinë mendore.",
    "Vetiver përdoret për aromë tokësore dhe të thellë.",
    "Bergamot është bazë në parfume italiane.",
    "Druri i cedrit jep ndjesi luksi dhe stabilitet aromatik.",
    "Aroma e lehtë përshtatet për çdo ditë.",
    "Ambra e bardhë përdoret për aromat elegante.",
    "Trëndafili i kuq simbolizon dashuri dhe pasion.",
    "Vanilja dhe oud shpesh kombinohen për parfume luksoze."
];

//FORM SUBMIT
document.getElementById("checkoutForm").addEventListener("submit", function(e) {
    e.preventDefault();

    if(cart.length === 0){
        alert("Ju lutem shtoni së paku një produkt para se të dorëzoni porosinë.");
        return;
    }

    // Ruaj autofill
    autofillFields.forEach(field => {
        const input = document.getElementById(
            field === "phone_prefix" ? "phonePrefixInput" :
            field === "first_name" ? "firstName" :
            field === "last_name" ? "lastName" :
            field === "phone" ? "phone" :
            field === "city" ? "cityInput" :
            "address"
        );
        localStorage.setItem(field, input.value);
    });

    const formData = new FormData(this);

    // Bashko prefix + numrin e telefonit
    const phonePrefix = document.getElementById("phonePrefixInput").dataset.value || document.getElementById("phonePrefixInput").value;
    const fullPhone = phonePrefix + document.getElementById("phone").value;
    formData.set("phone", fullPhone);

    // Products si linja pas linje
    cart.forEach((item, index) => {
        formData.append(`products${index+1}`, `${item.name} ${item.variant} - ${item.price} ALL sasia=${item.quantity}`);
    });

    formData.set("total_amount", totalAmount + " ALL");
    formData.set("shipping_info", shippingText);

    fetch("https://api.staticforms.dev/submit", { method: "POST", body: formData })
    .then(res => res.json())
    .then(() => {
        // Clear localStorage & reset
        [...autofillFields, "cart"].forEach(key => localStorage.removeItem(key));
        this.reset();
        cart = [];
        orderItems.innerHTML = "";
        orderTotal.innerText = "";
        deliveryInfo.innerText = "";

        const thankYou = document.getElementById("thankYouMessage");
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        thankYou.innerHTML = `<p>Faleminderit për porosinë tuaj!</p><p>Fun fact: ${randomFact}</p>`;
        thankYou.classList.remove("hidden");
    })
    .catch(err => {
        console.error(err); // vetëm log në console
    });
});

//CITY DROPDOWN
const cityInput = document.getElementById("cityInput");
const cityDropdown = document.getElementById("cityDropdown");

cityInput.addEventListener("input", () => {
    const value = cityInput.value.toLowerCase();
    let hasMatch = false;

    cityDropdown.querySelectorAll("li").forEach(li => {
        if (li.textContent.toLowerCase().includes(value)) {
            li.style.display = "block";
            hasMatch = true;
        } else {
            li.style.display = "none";
        }
    });

    cityDropdown.classList.toggle("hidden", !hasMatch);
});

cityDropdown.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
        cityInput.value = li.textContent;
        cityDropdown.classList.add("hidden");
    });
});

//Mbyll city dropdown kur klikojmë jashtë
document.addEventListener("click", e => {
    if (!cityInput.contains(e.target) && !cityDropdown.contains(e.target)) {
        cityDropdown.classList.add("hidden");
    }
});

//PHONE PREFIX DROPDOWN
const phoneInput = document.getElementById("phonePrefixInput");
const phoneDropdown = document.getElementById("phoneDropdown");

phoneInput.addEventListener("click", e => {
    e.stopPropagation();
    phoneDropdown.classList.toggle("hidden");
});

//Zgjedhja e një prefiksi
phoneDropdown.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
        phoneInput.value = li.dataset.value; // vendos vetëm prefixin
        phoneInput.dataset.value = li.dataset.value;
        phoneDropdown.classList.add("hidden");
    });
});

//Mbyll dropdown kur klikojmë jashtë
document.addEventListener("click", e => {
    if (!phoneInput.contains(e.target) && !phoneDropdown.contains(e.target)) {
        phoneDropdown.classList.add("hidden");
    }
});