const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('nav');

const typeDrop = document.querySelector('#typeDrop');
const charNum = document.querySelector('#quantity');
const totalPrice = document.querySelector('#totalPrice');

let numOrders = 0;
const orderButton = document.querySelector('#order');

localStorage.setItem('basePrice', "0");
localStorage.setItem('totalCost', "0");
localStorage.setItem('charCost', "0");

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

let gallery = document.getElementsByClassName("gallery-img");
let imgs = document.getElementsByClassName("gal-img");

for (let i = 0; i < gallery.length; i++) {
    gallery[i].addEventListener('click', () => {
        gallery[i].classList.toggle('selectedImg');
        imgs[i].classList.toggle('figSelectedImg');
    })
}

const types = [
    {
        name: "Concept",
        basePrice: 20
    },
    {
        name: "Comic",
        basePrice: 35
    },
    {
        name: "Full Piece",
        basePrice: 50
    },
    {
        name: "Away Banner",
        basePrice: 20
    },
    {
        name: "Emote/Badge",
        basePrice: 5
    },
    {
        name: "Link Banner",
        basePrice: 10
    },
    {
        name: "Profile Picture",
        basePrice: 10
    },
    {
        name: "Charicature",
        basePrice: 40
    },
    {
        name: "Cartoon",
        basePrice: 5
    },
];

function productOption(option) {
    return `
		<option value="${option.name}">${option.name}</option>
	`
}

function getOptions(types) {
    const html = types.map(productOption);
    typeDrop.innerHTML += html.join("");
}

getOptions(types);

function setNumOrders() {
    localStorage.setItem('numOrders', JSON.stringify(numOrders));
}

function getNumOrders() {
    numOrders = JSON.parse(localStorage.getItem('numOrders'));
}

orderButton.addEventListener('click', function () {
    getNumOrders();
    numOrders++;
    setNumOrders();
});

charNum.onchange = function () {
    let numChar = charNum.value;
    let cost = (numChar - 1) * 5;
    localStorage.setItem('charCost', JSON.stringify(cost));
    changeEstimate();
};

typeDrop.onchange = function () {
    let selectedTypeIndex = typeDrop.selectedIndex;
    let basePrice = types[selectedTypeIndex - 1].basePrice;
    localStorage.setItem('basePrice', JSON.stringify(basePrice))
    changeEstimate();
};

function changeEstimate() {
    let totalCost = JSON.parse(localStorage.getItem('charCost')) + JSON.parse(localStorage.getItem('basePrice'));
    localStorage.setItem('totalCost', "$" + JSON.stringify(totalCost));
    totalPrice.value = localStorage.getItem('totalCost');
}