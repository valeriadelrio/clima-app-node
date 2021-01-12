const axios = require('axios');


const getClima = async (lat, lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=381ec815362730531039eb073250a3ad&units=metric`);

    return response.data.main.temp;
}

module.exports = {
    getClima
}