/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import ReactDOM from 'react-dom/client';
//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { MapsApp } from './MapsApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if (!navigator.geolocation) {
  alert('Your navigator does not have geolocation support');
  throw new Error('Your navigator does not have geolocation support');
}

mapboxgl.accessToken =
  'pk.eyJ1Ijoia2FzdWsxIiwiYSI6ImNrczdydHJxZjFvd3AycW5qdWtyM28zbDgifQ.9jcPVVcyu9gLiSOyMSeAyQ';

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
