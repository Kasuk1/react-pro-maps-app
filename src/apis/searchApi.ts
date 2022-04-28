import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token:
      'pk.eyJ1Ijoia2FzdWsxIiwiYSI6ImNrczdydHJxZjFvd3AycW5qdWtyM28zbDgifQ.9jcPVVcyu9gLiSOyMSeAyQ',
  },
});

export default searchApi;
