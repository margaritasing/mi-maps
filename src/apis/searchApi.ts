import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoibWFyZ2FyaXRhc2luZyIsImEiOiJja3phY3BteGEyM2N0Mm9uZmwxMmM3amZkIn0.iH_M0_WHCMaFGD7n3oCDoA'
    }
})


export default searchApi;