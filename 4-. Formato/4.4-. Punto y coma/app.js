//Cada una de nuestras instrucciones debería de terminar con punto y coma
//No es necesario que pongamos el punto y coma

var tienda = {
    nombre: "Tienda las 4 esquinas",
    calcular: function (costo1, costo2) {
        return costo1 + costo2;
    },
    saludar: function () {
        var mensaje = "Hola";
        return mensaje;
    }
};

console.log(tienda.nombre);
console.log(tienda.calcular(10, 23));
console.log(tienda.saludar());

var btnSaludar = document.getElementById('btnSaludar');

btnSaludar.addEventListener('click', function () {
    console.log(tienda.saludar());
})

