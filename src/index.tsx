import React from 'react';
import ReactDOM from 'react-dom/client';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import './index.css';
import { MapsApp } from './MapsApp';

if ( !navigator.geolocation) {
  alert('El navegador no tiene la opciòn de Geolocalizador')
  throw new Error('El navegador no tiene la opciòn de Geolocalizador')
}



mapboxgl.accessToken = 'pk.eyJ1IjoibWFyZ2FyaXRhc2luZyIsImEiOiJja3phY3BteGEyM2N0Mm9uZmwxMmM3amZkIn0.iH_M0_WHCMaFGD7n3oCDoA';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);


