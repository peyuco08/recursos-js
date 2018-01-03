// Llámamos la modal
var modal = document.getElementById('miModal');

// Llámamos al botón que abre la modal
var btn = document.getElementById("miBtn");

// Llámamos al elemento <span> que cierra la modal
var span = document.getElementsByClassName("cerrar")[0];

// Al hacer click en el botón, se abre la modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Al hacer click en el elemento <span> (x), cerramos la modal
span.onclick = function() {
    modal.style.display = "none";
}

// Al hacer click fuera del areá de la modal, esta se cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}