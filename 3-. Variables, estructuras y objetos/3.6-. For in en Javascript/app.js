var persona = {
    nombre: 'Victor',
    email: 'victor.velaz@gmail.com',
    twitter: 'victuur',
    saludar: function () {
        return ('Hola, buenos días')
    }
}

// Es una buena practica iterar entre las propiedades de un obj con un for-in 
// accediendo al valor del obj al mismo tiempo aprovechando la variable 
// de iteracion que en este caso es dato

var dato = "";
for (dato in persona) {
    console.log(dato, persona[dato])
}