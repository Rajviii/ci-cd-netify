import { useState } from 'react';
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
  MarkerClusterer
} from '@react-google-maps/api';
import { workOrders } from '../data/WorkOrderData';

function CustomMap() {
  const [mapType, setMapType] = useState('roadmap');
  const [selected, setSelected] = useState(null);

  const defaultCenter = {
    lat: 23.5880,
    lng: 72.3693
  };

  const locations = workOrders.map((order) => ({
    id: order.id,
    name: order.locationName,
    lat: order.coordinates.lat,
    lng: order.coordinates.lng
  }));

  return (
    <LoadScript googleMapsApiKey="AIzaSyCw6x2h8yP1cKm_EaxUacX4PKyFsXW_tdU">

      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <button
          onClick={() => setMapType('roadmap')}
          className="bg-white px-3 py-1 rounded shadow text-sm hover:bg-gray-100"
        >
          Map
        </button>
        <button
          onClick={() => setMapType('satellite')}
          className="bg-white px-3 py-1 rounded shadow text-sm hover:bg-gray-100"
        >
          Satellite
        </button>
      </div>

      <div className="w-full h-full">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={defaultCenter}
          zoom={5}
          mapTypeId={mapType}
        >
          <MarkerClusterer>
            {(clusterer) =>
              locations.map((loc) => (
                <Marker
                  key={loc.id}
                  position={{ lat: loc.lat, lng: loc.lng }}
                  clusterer={clusterer}
                  onClick={() => setSelected(loc)}
                />
              ))
            }
          </MarkerClusterer>

          {selected && (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => setSelected(null)}
            >
              <div>
                <h4 className="font-semibold text-sm">{selected.name}</h4>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </LoadScript>
  );
}

export default CustomMap;
