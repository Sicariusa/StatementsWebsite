import { createContext, useContext } from 'react';

const MapContext = createContext<string>('');

export function MapProvider({ children }: { children: React.ReactNode }) {
  const token = import.meta.env.VITE_MAPBOX_TOKEN || '';
  
  return (
    <MapContext.Provider value={token}>
      {children}
    </MapContext.Provider>
  );
}

export const useMapToken = () => useContext(MapContext); 