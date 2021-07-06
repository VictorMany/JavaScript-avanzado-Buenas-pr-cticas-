console.time('revisión');

var animales = ['perro', 'gallina', 'pez'];

var l = animales.length;

for (let i = 0; i < 10000; i++) {
    animales[i] = i;
}

console.timeEnd('revisión');