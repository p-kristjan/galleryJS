function images(imgs) {
    // Saab kätte pildi ja kirjelduse.
    var expandedImg = document.getElementById('expandedImg');
    var imgText = document.getElementById('imgText');
    // Muudab laiendatud pildi selleks pildiks, mille peale klõpsati.
    expandedImg.src = imgs.src;
    // Muudab pildi teksti antud pildi alt attribuudiks.
    imgText.innerHTML = imgs.alt;
    // Teeb laiendatud pildi nähtavaks.
    expandedImg.parentElement.stlye.dispaly = "block";
}