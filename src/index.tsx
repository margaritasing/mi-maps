import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MapsApp } from './MapsApp';

if ( !navigator.geolocation) {
  alert('El navegador no tiene la opciòn de Geolocalizador')
  throw new Error('El navegador no tiene la opciòn de Geolocalizador')
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);


