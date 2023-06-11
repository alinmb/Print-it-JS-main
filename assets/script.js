// Récuperation des éléments cliquable

const leftArrow = document.querySelector(".arrow_left")
const rightArrow = document.querySelector(".arrow_right")
const dots = document.querySelector(".dot")
const bannerImage = document.querySelector(".banner-img")
const bannerDesc = document.querySelector(".banner-description")

const firstDot = document.querySelector('.dot1')
const scndDot = document.querySelector('.dot2')
const thrdDot = document.querySelector('.dot3')
const frthDot = document.querySelector('.dot4')

// Tableaux regroupant les images
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Fonction qui permet de changer d'image en récupérant le bon slide du tableau slides

let numberImage = 0;

const changeImage = (direction) => {
	numberImage = numberImage + direction;

	if (numberImage > slides.length - 1) {
		numberImage = 0;
	}
	if (numberImage < 0) {
		numberImage = slides.length - 1;
	}
	bannerImage.src = "./assets/images/slideshow/" + slides[numberImage].image;
	bannerDesc.innerHTML = slides[numberImage].tagLine;

	// DOTS Ajouter et retirer

	if (numberImage === 0) {
		firstDot.classList.remove('selected')
		scndDot.classList.remove('selected')
		thrdDot.classList.remove('selected')
		frthDot.classList.remove('selected')

		firstDot.classList.add('selected')
	} else if (numberImage === 1) {
		firstDot.classList.remove('selected')
		thrdDot.classList.remove('selected')
		frthDot.classList.remove('selected')

		scndDot.classList.add('selected')
	} else if (numberImage === 2) {
		firstDot.classList.remove('selected')
		scndDot.classList.remove('selected')
		frthDot.classList.remove('selected')

		thrdDot.classList.add('selected')
	} else if (numberImage === 3) {
		firstDot.classList.remove('selected')
		scndDot.classList.remove('selected')
		thrdDot.classList.remove('selected')

		frthDot.classList.add('selected')
	}
}

