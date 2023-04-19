document.addEventListener("DOMContentLoaded", () => {
    const images = new Array();

    function preloadImages(...images) {
        images.forEach((image, i) => {
            image = new Image();
            image.src = preloadImages.arguments[i];
        });
    };

    // Предварительная загрузка нужных картинок
    preloadImages(
        "sword/sw_broken.png","sword/sw0.png", "sword/sw1.png", "sword/sw2.png", "sword/sw3.png", "sword/sw4.png", "sword/sw5.png", "sword/sw6.png", "sword/sw7.png",
         "sword/sw8.png", "sword/sw9.png", "sword/sw10.png", "sword/sw11.png", "sword/sw12.png", "sword/sw13.png", "sword/sw14.png", "sword/sw15.png", "sword/sw16.png",
          "sword/sw0.png", "sword/sw17.png"
    );
});