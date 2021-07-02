
var mensaje = "mensaje local";
resultado += 2;

//Evitamos riesgo de colsiones de variables
//Trabajar con objeto como si fuera un espacio de nombres para trabajar con variables especificas
var datos = {};
datos.mensaje = "mensaje local del objeto";
datos.resultado = 120;

function saludar() {
    console.log(mensaje);
    console.log(resultado);
    
    console.log(datos.mensaje);
    console.log(datos.resultado);
}

saludar();