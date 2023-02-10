const fs = require('fs');
require('colors');

const crearArchivo = async( base = 5, listar, hasta=10) => {

    try {
        
        
        let salida  = '';
        let consola = '';
        
        for  (a=1;a<=hasta;a++){
    salida += `  ${base} x ${a} = ${base*a}\n`;
    consola +=`   ${base} ${'x'.blue} ${a} ${'='.blue} ${base*a}\n`;
        }
       if (listar) {
         console.log("===============================".inverse);
         console.log(`========= Tabla del ${base} =========`.inverse);
         console.log("===============================".inverse);
         console.log(consola);
        };
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            
            return `tabla-${base}.txt`.rainbow;
        
    } catch (error) {
        throw error
    }

}


module.exports = {
    crearArchivo
}


    // fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
    //     if (err) throw err;

    //     console.log(`guardada la tabla del ${base}`);
    // })