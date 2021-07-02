

var animales = ["gato", "perro", "paloma", "ser`iente"]

for (var i = 0; i < animales.length; i++) {
    console.log(animales[i])
}

//Lo correcto es crear una variable global con el total de items de nuestro arreglo
//para que no se este tratando de encontrar el total cada vez que se itera

var totalAnimales = animales.length;

for (var i = 0; i < totalAnimales; i++) {
    console.log(animales[i])
}
