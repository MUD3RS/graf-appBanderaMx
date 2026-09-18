
// OBTENER ELEMENTOS DEL HTML

const controlVerde =
    document.getElementById("controlVerde");

const controlRojo =
    document.getElementById("controlRojo");

const franjaVerde =
    document.getElementById("franjaVerde");

const franjaRoja =
    document.getElementById("franjaRoja");

const codigoVerde =
    document.getElementById("codigoVerde");

const codigoRojo =
    document.getElementById("codigoRojo");


// CONVERTIR DECIMAL A HEXADECIMAL

function convertirHexadecimal(numero) {

    return Number(numero)
        .toString(16)
        .padStart(2, "0")
        .toUpperCase();

}


// ACTUALIZAR COLOR VERDE

function actualizarVerde() {

    // Obtener valor del control
    let valor = controlVerde.value;

    // Convertir a hexadecimal
    let hexadecimal = convertirHexadecimal(valor);

    // Construir color hexadecimal
    let color = "#00" + hexadecimal + "00";

    // Actualizar franja verde
    franjaVerde.style.backgroundColor = color;

    // Mostrar código hexadecimal
    codigoVerde.textContent = color;

}


// ACTUALIZAR COLOR ROJO

function actualizarRojo() {

    // Obtener valor del control
    let valor = controlRojo.value;

    // Convertir a hexadecimal
    let hexadecimal = convertirHexadecimal(valor);

    // Construir color hexadecimal
    let color = "#" + hexadecimal + "0000";

    // Actualizar franja roja
    franjaRoja.style.backgroundColor = color;

    // Mostrar código hexadecimal
    codigoRojo.textContent = color;

}


// EVENTOS DE LOS CONTROLES

controlVerde.addEventListener(
    "input",
    actualizarVerde
);

controlRojo.addEventListener(
    "input",
    actualizarRojo
);


// ESTABLECER COLORES INICIALES

actualizarVerde();

actualizarRojo();