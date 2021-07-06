//Si les ponemos el mismo nomnbre conservamos una relación lógica
var btnSaludar = document.getElementById('btnSaludar');

// Si agregamos una relacion con un addEvenListener hacemos quie la dependencia entre los archivos no sea 
// muy fuerte y mantenemos nuestro html más limpio
btnSaludar.addEventListener('click', function () {
    console.log('Hola mundo');
});

