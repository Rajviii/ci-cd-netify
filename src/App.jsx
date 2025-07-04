import { useState } from 'react'
import './App.css'
import { GoogleMap, InfoWindow, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';

function App() {
  const [mapType, setMapType] = useState('roadmap');
  const [selected, setSelected] = useState(null);

  const containerStyle = {
    width: '100%',
    height: '100vh'
  }

  const defaultCenter = {
    lat: 23.5880,
    lng: 72.3693
  }

  const locations = [
    {
      id: 1,
      name: 'A.G. Home',
      lat: 27.6648,
      lng: -81.5158
    },
    {
      id: 2,
      name: 'M.B. Home',
      lat: 17.4989,
      lng: 79.0766
    },
    {
      id: 3,
      name: 'R.B. Home',
      lat: 17.4989,
      lng: 79.0770
    },
    {
      id: 4,
      name: 'F.G. Home',
      lat: 27.6648,
      lng: -81.5161
    },
    {
      id: 5,
      name: 'J.G. Home',
      lat: 27.6648,
      lng: -81.5168
    },
    {
      id: 6,
      name: 'Our Home',
      lat: 23.5880,
      lng: 72.3693
    },
  ]
  console.log('selected', selected);

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyCw6x2h8yP1cKm_EaxUacX4PKyFsXW_tdU">

        <div>
          <button onClick={() => setMapType('roadmap')}>Map View</button>
          <button onClick={() => setMapType('satellite')}>Satellite</button>
        </div>

        <div className='fullscreen-map'>
          <GoogleMap
            mapContainerStyle={containerStyle}
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
                    // icon={{
                    //   url:
                    //     loc.status === 'pending'
                    //       ? 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                    //       : 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                    // }}
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
                  <h4>{selected.name}</h4>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      </LoadScript>
    </>
  )
}

export default App
