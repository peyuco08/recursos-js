// Ajuste el ancho de la navegación de un lado a 250 píxeles y el margen izquierdo del contenido de la página a 250 píxeles
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("content").style.marginLeft = "250px";
}

/* Ajuste el ancho de la navegación de la parte a 0 y el margen izquierdo del contenido de la página a 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("content").style.marginLeft = "0";
}
