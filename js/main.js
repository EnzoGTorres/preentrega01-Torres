let moneda = ""
let monto = 0
let cuotas = 0
let interes = 0
let totalInteres = 0.98
let prestamo = 0
let consulta = true
let interesGarantia = 0
let cotizacion = 0
const valorDolar = 385
const valorEuro = 400


const eligeMoneda = "Ingresa la moneda de garantía \n" + "dolar \n" + "euro" 
function elegirMoneda() {
    let moneda = prompt (eligeMoneda).toLowerCase() .trim()
    if (moneda !== "dolar" && moneda !== "euro") {
        alert("debes elegir una moneda de respaldo valida.")
        
    } 
    else if (moneda === "dolar") {
    interes = 0.85
    interesGarantia = 1.08
    cotizacion = valorDolar
        calculoPrestamo(moneda, interes, interesGarantia, cotizacion);
        
    } 
    else {
        interes = 0.88
        interesGarantia = 1.05
        cotizacion = valorEuro
            calculoPrestamo(moneda, interes, interesGarantia, cotizacion);
    }
}

function calculoPrestamo (moneda, interes, interesGarantia, cotizacion){
    monto = prompt("elige el monto a depositar en :" + moneda)
    prestamo = prompt("Elige el monto del prestamo en pesos")
    cuotas = prompt ("Elige la cantidad de cuotas")
            if (prestamo >= (monto * cotizacion) * interes)
            alert(" No puedes pedir este monto en relacion a esa garantía.")
        else {
            alert("El valor de la cuota a pagar es: " + (((prestamo * (1 + parseFloat(interes/12)))/ cuotas) ))
            alert("se guardarán tus " + monto + " " + moneda + " recibiendo un total de: " + monto * interesGarantia + " al finalizar el ultimo pago")
    }
}

function consultarPrestamo(){
    while(consulta) {
        elegirMoneda ();
        consulta = confirm ("Deseas consultar otro prestamo?")
    }
    alert("Gracias por comunicarse con nosotros!")
}

