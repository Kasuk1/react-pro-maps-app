import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error('Map is not ready!');
    if (!userLocation) throw new Error('User location is not available');

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };

  return (
    <button
      className='btn btn-primary'
      style={{ position: 'fixed', top: 20, right: 20, zIndex: 99 }}
      onClick={onClick}
    >
      My Location
    </button>
  );
};
