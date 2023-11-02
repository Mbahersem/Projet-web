const { QRCodeGenerator } = require('qr-library');

// Sélectionner le bouton du formulaire
const button = document.querySelector('form button');

// Sélectionner l'élément où l'image sera affichée
const qrCodeSection = document.querySelector('section div');

// Sélectionner l'élément du champ de lien
const lienInput = document.querySelector("input[name='lien']");

// Fonction pour gérer le clic sur le bouton
function handleClick() {
  // Vérifier si le champ de texte n'est pas vide
  if (lienInput.value !== "") {
    // Générer le code QR à partir du lien
    QRCodeGenerator(lienInput.value)
      .then(qrcode => {
        // Créer l'élément de l'image
        const img = document.createElement('img');
        img.src = qrcode;

        // Effacer le contenu précédent de la section du QR code
        qrCodeSection.innerHTML = "";

        // Ajouter l'image à la section du QR code
        qrCodeSection.appendChild(img);
      })
      .catch(error => {
        console.error('Erreur lors de la génération du code QR:', error);
        alert('Erreur lors de la génération du code QR');
      });
  } else {
    // Changer la couleur du champ de texte en rouge s'il est vide
     
  }
}

button.addEventListener('click', handleClick);