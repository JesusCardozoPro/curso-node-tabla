const { crearArchivo } = require('./helpers/multiplicar');
const  argv  = require('./config/yargs');
const colors = require('colors');
console.clear();

console.log('base: yargs'.trap, argv.base );





crearArchivo(argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado bien'.green))
    .catch(err => console.log(err, 'creado mal' ));


// const [,, arg = 'base=5' ] = process.argv;
// const [, base=5] =arg.split('=');
// console.log(base)