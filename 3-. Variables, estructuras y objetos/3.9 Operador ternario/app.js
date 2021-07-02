var estado = true;

//Una manera tradicional de hacer un if y un else
if (estado) {
    console.log('continuar');
}
else {
    console.log('detenerse');
}

//Las operaciones ternarias son mas sencillas de leer y mantener y cumplen la 
//misma función
var accion = estado ? 'continuar' : 'detenerse';