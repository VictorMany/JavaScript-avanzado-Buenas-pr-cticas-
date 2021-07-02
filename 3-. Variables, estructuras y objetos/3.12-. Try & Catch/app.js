var animales = ["gato", "perro", "paloma", "ser`iente"]

var totalAnimales = animales.length;

// Manera donde se ejecuta por cada iteracion un try and catch
// Nos vuelve la app mas lenta
for (var i = 0; i < totalAnimales; i++) {
    try {
        //Acciones a realizar por la excepción
    } catch (e) {
        //Manejo de los errores
    }
}

//LO CORRECTO
try {
    //Acciones a realizar por la excepción
    for (var i = 0; i < totalAnimales; i++) {

    }
} catch (error) {

}

