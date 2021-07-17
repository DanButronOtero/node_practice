const deadpool = {
    nombre: 'Wade',
    apellido: 'Windston',
    poder: 'Regeneracion',
    // edad: 50,
    getNombre() { return `${this.nombre} ${this.apellido}` }
}

console.log(deadpool.getNombre());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// const { nombre, apellido, poder, edad = 0 } = deadpool;

// console.log(nombre, apellido, poder, edad);


function imprimirHeroe(heroe) {
    const { nombre, apellido, poder, edad = 0 } = heroe;
    console.log(nombre, apellido, poder, edad);

}

// imprimirHeroe(deadpool);

const heroes = ['deadpool', 'Superman', 'Batman'];

const [, , h3] = heroes;

console.log(h3);