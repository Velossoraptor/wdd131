const productDrop = document.querySelector('#product');
let numReviews = 0;
const shareReviewButton = document.querySelector('#share');

const products = [
    {
        id: "fc - 1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc - 2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs - 1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac - 2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj - 1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function productOption(option) {
    return `
		<option value="${option.id}">${option.name}</option>
	`
}

function getOptions(products) {
    const html = products.map(productOption);
    productDrop.innerHTML += html.join("");
}

getOptions(products);

function setNumReviews() {
    localStorage.setItem('numReviews', JSON.stringify(numReviews));
}

function getNumReviews() {
    numReviews = JSON.parse(localStorage.getItem('numReviews'));
}

shareReviewButton.addEventListener('click', function () {
    getNumReviews();
    numReviews++;
    setNumReviews();
});