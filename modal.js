document.addEventListener("DOMContentLoaded", function() {
    var miBoton = document.getElementById("boton-modal");
    var miVentanaModal = document.getElementById("miVentanaModal");
    var miBotonCerrar = document.getElementsByClassName("cerrar")[0];
  
    miBoton.onclick = function() {
      miVentanaModal.style.display = "block";
    }
  
    miBotonCerrar.onclick = function() {
      miVentanaModal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == miVentanaModal) {
        miVentanaModal.style.display = "none";
      }
    }
  });