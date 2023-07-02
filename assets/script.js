// Récuperation des éléments cliquable:
const leftArrow = document.querySelector(".arrow_left")
const rightArrow = document.querySelector(".arrow_right")
const dotsContainer = document.querySelector(".dots")
const bannerImage = document.querySelector(".banner-img")
const bannerDesc = document.querySelector(".banner-description")

// Tableaux regroupant les images et les déscriptions à injecter dynamiquement dans le carrousel:
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

// Fonction qui permet de changer d'image en récupérant les images et textes du tableau slides:

let indexImage = 0; // L'index des images.
const changeImage = (direction) => {

	indexImage = indexImage + direction;
	// Si l'index est supérieur à la taille du tableau slides -1, alors l'index repasse à 0.
	if (indexImage > slides.length - 1) {
		indexImage = 0;
	}
	// Si l'index est inférieur à 0 alors l'index repasse au dernier index du tableau slide à savoir 3.
	if (indexImage < 0) {
		indexImage = slides.length - 1;
	}
	// On recupère la source de l'image et la modifions dynamiquement.
	bannerImage.src = "./assets/images/slideshow/" + slides[indexImage].image;
	// On recupère la description des images et la modifions dynamiquement.
	bannerDesc.innerHTML = slides[indexImage].tagLine;
	// On trigger la fonction dotPing() ici de façon à ce qu'elle se déclenche à chaque fois que l'utilisateur souhaite changer d'image.
	dotPing()
}

// Fonction qui crée dynamiquement des bullets points par rapport à la taille du tableau slides:
const createDots = () => {
	// On utilise une boucle en lui indiquant de tourner tant que son index est inférieur à la taille du tableau slides.
	for (let i = 0; i < slides.length ; i++) {
	// On crée dynamiquement une nouvelle balise DIV dans le HTML.
		const newDot = document.createElement('div');
	// Cette DIV aura pour CLASS : "dot"
		newDot.classList.add('dot');
	// Cette DIV s'integre au container DOTSCONTAINER déjà existant dans le HTML.
		dotsContainer.appendChild(newDot);	
	// On lui indique comme condition de donner au premier enfant de ce container la CLASS : "selected".
		if (i === 0) { 
			dotsContainer.firstChild.classList.add('selected');
		}
	}	
}
// On appel la fonction qui tournera automatiquement.
createDots()

// Fonction qui permet de supprimer la CLASS "selected" d'un DOT et de la mettre à un autre en fonction de l'index de l'image.
const dotPing = () => {
	// On recupère le nouvel élément crée dynamiquement du HTML.
	const dot = document.getElementsByClassName('dot');
	// On crée une boucle en lui indiquant de supprimer la CLASS "selected" des dot.
	for (let i = 0; i < dot.length; i++) {
		dot[i].classList.remove('selected')
	}
	// Hors de cette boucle, on ajoute la CLASS : "selected" au dot qui a le même index (indexImage) que l'image affiché dans le DOM.
	// Sachant que la boucle tourne et que la CLASS : "selected" se supprime, cela donne l'effet que le dot se deplace.
	dot[indexImage].classList.add('selected')
}