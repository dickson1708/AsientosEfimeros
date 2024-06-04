const MALAGA = document.getElementById('ESMA');

function ocultar() {
    document.getElementById('mapa').style.display = "none";
    document.getElementById('afluencias').style.display = "none";
    document.getElementById('cuadroBooking').style.display = "block";
}

MALAGA.addEventListener('click', ocultar);