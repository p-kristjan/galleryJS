function images(imgs) {
    // Saab k�tte pildi ja kirjelduse.
    var expandedImg = document.getElementById('expandedImg');
    var imgText = document.getElementById('imgText');
    // Muudab laiendatud pildi selleks pildiks, mille peale kl�psati.
    expandedImg.src = imgs.src;
    // Muudab pildi teksti antud pildi alt attribuudiks.
    imgText.innerHTML = imgs.alt;
    // Teeb laiendatud pildi n�htavaks.
    expandedImg.parentElement.stlye.dispaly = "block";
}