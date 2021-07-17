const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: true

    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero';
        }
        return true;
    })
    .argv;






// const [, , arg3] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);
console.clear();
console.log(argv);

crearArchivo(argv.base, argv.l)
    .then(nombreArchivo => console.log(`archivo:${nombreArchivo}`))
    .catch(err => console.log(err));