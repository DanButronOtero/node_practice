const fs = require('fs');
const crearArchivo = async(base = 5, listar = false) => {

    try {
        let salida = '';

        for (let i = 1; i < 11; i++) {
            salida += `${base} x ${i}=${base*i} \n`;

        }
        if (listar) {
            console.log(salida);
        }

        fs.writeFileSync(`./tabla-${base}.txt`, salida);

        return `./tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

};

module.exports = { crearArchivo }