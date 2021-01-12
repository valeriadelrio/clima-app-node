const axios = require('axios');

const getLugarLarLng = async (dir) => {
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `http://api.weatherapi.com/v1/current.json?q=${encodedUrl}`,
        headers: { 'key': '07d92ec42e8d4fb9815180218211201' }
    });

    const response = await instance.get();

    if (!response.data) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = response.data.location;
    console.log('data', data);
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getLugarLarLng
}