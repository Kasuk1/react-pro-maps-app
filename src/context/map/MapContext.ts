/* eslint import/no-webpack-loader-syntax: off */

//@ts-ignore
import { Map } from '!mapbox-gl';
import { createContext } from 'react';

interface MapContextProps {
  isMapReady: boolean;
  map?: Map;
  setMap: (map: Map) => void;
  getRouteBetweenPoints: (
    start: [number, number],
    end: [number, number]
  ) => Promise<void>;
}

export const MapContext = createContext<MapContextProps>({} as MapContextProps);
