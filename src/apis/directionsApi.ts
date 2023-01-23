import axios from 'axios';


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoibWFyZ2FyaXRhc2luZyIsImEiOiJja3phY3BteGEyM2N0Mm9uZmwxMmM3amZkIn0.iH_M0_WHCMaFGD7n3oCDoA'
    }
})


export default directionsApi;