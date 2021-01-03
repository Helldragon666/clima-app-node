const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const encodedUlr = encodeURI(argv.direccion);

const instance = axios.create({
    baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUlr}&units=metric`,
    headers: { 'X-RapidAPI-Key': 'e52be02deamshf332e156ad8549ap10e076jsn843932762e14' }
});

instance.get()
    .then(resp => {
        //console.log(resp.data.weather[0].main);
        console.log(`El clima de ${argv.direccion} es ${resp.data.weather[0].description} y tiene una temperatura de ${resp.data.main.temp}.`);
    }).catch(err => {
        console.log('ERROR!!!', err);
    });