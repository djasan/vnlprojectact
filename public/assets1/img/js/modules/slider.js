// public/js/slider.js

document.addEventListener('DOMContentLoaded', function() {
    // Attendez que le DOM soit entièrement chargé

    // Sélectionnez le conteneur du slider
    const sliderContainer = document.querySelector('#sliderContainer');

    // Sélectionnez toutes les images du slider
    const sliderImages = sliderContainer.querySelectorAll('.slider-image');

    // Initialisez l'index actuel du slider
    let currentIndex = 0;

    // Fonction pour afficher l'image suivante
    function showNextImage() {
        sliderImages[currentIndex].classList.remove('active');

        // Incrémentez l'index ou revenez à zéro s'il atteint la fin
        currentIndex = (currentIndex + 1) % sliderImages.length;

        sliderImages[currentIndex].classList.add('active');
    }

    // Utilisez setInterval pour faire défiler automatiquement les images toutes les 3 secondes
    setInterval(showNextImage, 3000);
});
