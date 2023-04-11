


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

const nvoprestamo = new Prestamo(cantCuotas)
alert('El total a pagar es de: $' +nvoprestamo.cantCuotas())

function consultarPrestamo(){
    while(consulta) {
        elegirMoneda ();
        consulta = confirm ("Deseas consultar otro prestamo?")
    }
    alert("Gracias por comunicarse con nosotros!")
}

