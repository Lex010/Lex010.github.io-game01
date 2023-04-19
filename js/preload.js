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
        "sw_broken.png","sw0.png", "sw1.png", "sw2.png", "sw3.png", "sw4.png", "sw5.png", "sw6.png", "sw7.png", "sw8.png", "sw9.png",
        "sw10.png", "sw11.png", "sw12.png", "sw13.png", "sw14.png", "sw15.png", "sw16.png", "sw0.png", "sw17.png"
    );
});