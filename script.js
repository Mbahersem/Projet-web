// Sélectionner le bouton du formulaire
const button = document.querySelector('button');

// Sélectionner l'élément où l'image sera affichée
const qrCodeSection = document.querySelector('section div');

// Fonction pour gérer le clic sur le bouton
function handleClick() {
  // Créer l'élément de l'image
  const image = document.createElement('img');
  image.src = 'example.jpg';
  image.alt = 'QR Code';

  // Ajouter la classe pour l'animation slideInRight
  image.classList.add('slide-in-right');
  image.animate([{
    transform: 'translateX(100%)',
},
 {
    transform: 'translateX(0)',
}],{// options de l'animation
duration: 1000,
easing: 'ease-in-out', 
fill: 'forwards'})

  // Ajouter l'image à la section du QR code
  qrCodeSection.appendChild(image);
}

// Ajouter l'événement clic au bouton
button.addEventListener('click', handleClick);
