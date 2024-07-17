const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

let gallery = document.getElementsByClassName("gallery-img");
let imgs = document.getElementsByClassName("gal-img");

for (let i = 0; i < gallery.length; i++) {
    // gallery[i].onclick = function (e) { imgZoom(e) }
    gallery[i].addEventListener('click', () => {
        gallery[i].classList.toggle('selectedImg');
        imgs[i].classList.toggle('figSelectedImg');
    })
}

// function imgZoom(e){
//     e.classList.toggle('selectedImg');
// }