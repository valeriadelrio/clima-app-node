
const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const getInfo = async (direccion) => {

    const coords = await lugar.getLugarLarLng(direccion);
    if (coords && coords.lon && coords.lat) {
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${coords.direccion} es de ${temp} grados centigrados`;
    } else {
        return `No se pude determinar el clima de ${direccion}`;
    }

    // try {
    //     const coords = await lugar.getLugarLarLng(direccion);
    //     const temp = await clima.getClima(coords.lat, coords.lon);
    //     return `El clima de ${coords.direccion} es de ${temp} grados centigrados`;
    // } catch (error) {
    //     return `No se pude determinar el clima de ${direccion}`;
    // }
}

getInfo(argv.direccion).then(console.log).catch(console.log);