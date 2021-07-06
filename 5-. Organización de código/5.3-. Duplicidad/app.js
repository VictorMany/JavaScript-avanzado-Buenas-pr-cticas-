
//Manera redundante
var cuenta = 2 + 3;

var cuentaNueva = 20 + 45;

var totalFinal = cuenta + cuentaNueva;

console.log(totalFinal);


//Para evitar tanta redundancia y poder hacer aplicaciones de nuestras funciones más complejas
//Usamos funciones
function Suma(datoA, datoB) {
    var resultado = datoA + datoB;
    return resultado;
}

Suma(2, 3);

var cuentaFinal = suma(suma(2, 3), suma(20, 45));

console.log(cuentaFinal);