const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('nav');

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		built: 2005,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		built: 1888,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		built: 2015,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		built: 2020,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		built: 1974,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		built: 1986,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		built: 1983,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Salt Lake City Utah",
		location: "Salt Lake City, Utah",
		dedicated: "1893, April, 6",
		area: 253000,
		built: 1893,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
	},
	{
		templeName: "Hong Kong China",
		location: "Kowloon Tong, Kowloon City, Hong Kong",
		dedicated: "1996, May, 26",
		area: 51921,
		built: 1996,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x250/hong_kong_china_temple_baptistry.jpeg	"
	},
	{
		templeName: "Okinawa Japan",
		location: "Okinawa, Japan",
		dedicated: "2023, November, 12",
		area: 12437,
		built: 2023,
		imageUrl:
			"https://www.churchofjesuschrist.org/imgs/99f1e63f202511eeb116eeeeac1ef1e8603f51a8/full/320%2C/0/default"
	},
];

function templeCard(temple) {
	return `
	<div class="temple-card">
		<h2>${temple.templeName}</h2>
		<figure>
			<figcaption>
				Location: ${temple.location}<br>
				Dedicated: ${temple.dedicated}<br>
				Size: ${temple.area}
			</figcaption>
			<img src="${temple.imageUrl}" alt="${temple.templeName} Image" loading="lazy">
		</figure>
	</div>
	`
}

function renderTempleCards(temples) {
	const html = temples.map(templeCard);
	document.querySelector("#album").innerHTML = html.join("");
}

renderTempleCards(temples);

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
	renderTempleCards(temples);
});

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
	renderTempleCards(temples.filter(temple => temple.built < 1900))
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
	renderTempleCards(temples.filter(temple => temple.built > 2000))
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
	renderTempleCards(temples.filter(temple => temple.area > 90000))
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
	renderTempleCards(temples.filter(temple => temple.area < 10000))
});