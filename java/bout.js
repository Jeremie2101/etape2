// Sélectionnez tous les boutons d'incrémentation et de décrémentation par leur classe
const incrementButtons = document.querySelectorAll('.increment');
const decrementButtons = document.querySelectorAll('.decrement');
const quantities = document.querySelectorAll('.qty');

// Ajoutez des gestionnaires d'événements aux boutons d'incrémentation
incrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Incrémente la valeur de la quantité pour l'élément correspondant
        quantities[index].value = parseInt(quantities[index].value) + 1;
    });
});

// Ajoutez des gestionnaires d'événements aux boutons de décrémentation
decrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Vérifiez si la valeur de la quantité est supérieure à zéro avant de décrémenter
        if (parseInt(quantities[index].value) > 0) {
            quantities[index].value = parseInt(quantities[index].value) - 1;
        }
    });
});

