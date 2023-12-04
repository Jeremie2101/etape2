// Sélectionnez tous les boutons d'incrémentation et de décrémentation par leur classe
const incrementButtons = document.querySelectorAll('.increment');
const decrementButtons = document.querySelectorAll('.decrement');
const quantities = document.querySelectorAll('.qty');
const prices = document.querySelectorAll('.price');
const totalElement = document.getElementById('total'); // une balise avec l'ID "total" pour afficher la somme totale

// Ajoutons des gestionnaires d'événements aux boutons d'incrémentation
incrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Incrémente la valeur de la quantité pour l'élément correspondant
        quantities[index].value = parseInt(quantities[index].value) + 1;
        
        // Appelons une fonction pour recalculer la somme totale
        calculerSommeTotale();
    });
});

// Ajoutons des gestionnaires d'événements aux boutons de décrémentation
decrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Vérifions si la valeur de la quantité est supérieure à zéro avant de décrémenter
        if (parseInt(quantities[index].value) > 0) {
            quantities[index].value = parseInt(quantities[index].value) - 1;
            
            // Appelons une fonction pour recalculer la somme totale
            calculerSommeTotale();
        }
    });
});

// Fonction pour calculer la somme totale
function calculerSommeTotale() {
    let sommeTotale = 0;
    
    // Parcours tous les articles dans le panier
    for (let i = 0; i < quantities.length; i++) {
        const quantite = parseInt(quantities[i].value);
        const prix = parseFloat(prices[i].innerText.replace('$', '')); // Supposons que les prix soient au format "$X.XX"
        sommeTotale += quantite * prix;
    }
    
    // Mettez à jour l'affichage de la somme totale
    totalElement.innerText = '$' + sommeTotale.toFixed(2); // Formatage en dollars avec deux décimales
}

// Appelez la fonction initiale pour calculer la somme totale au chargement de la page
calculerSommeTotale();


// Sélectionnez le bouton par sa classe "achat"
const boutonAchat = document.querySelector('.achat');

// Ajoutez un gestionnaire d'événements au clic sur le bouton
boutonAchat.addEventListener('click', function() {
    alert('Votre achat a été effectué avec succès !'); // Message d'alerte
});