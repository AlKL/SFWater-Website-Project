import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

const MapComponent = () => {

    const Map = () => {
        return (
            <GoogleMap
                defaultZoom={19}
                defaultCenter={{ lat: 43.704030, lng: -79.504400 }}
            >
                <Marker
                    position={{ lat: 43.704030, lng: -79.504350 }}
                    // defaultLabel='SPARKLING FRESH WATER'
                />
            </GoogleMap>
        );
    };

    const WrappedMap = withScriptjs(withGoogleMap(Map));

    return (
        <div style={{ height: '100%', width: '100%' }} >
            <WrappedMap
                // eslint-disable-next-line no-undef
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
        </div>
    );
};

export default MapComponent;