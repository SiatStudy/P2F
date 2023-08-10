import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({ address, api }) => {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        if (address) {
            const script = document.createElement('script');

            script.src = `https://maps.googleapis.com/maps/api/js?key=${api}`;
            script.async = true;
            script.onload = () => {
                const geocoder = new window.google.maps.Geocoder();
                geocoder.geocode({ address }, (results, status) => {
                    if (status === 'OK' && results.length > 0) {
                        const location = results[0].geometry.location;
                        setPosition({
                            lat: location.lat(),
                            lng: location.lng()
                        });
                    }
                });
            };
            document.head.appendChild(script);
        }
    }, [address, api]);

    const containerStyle = {
        width: '100%',
        height: '500px'
    };

    const center = {
        lat: 37.7749,
        lng: -122.4194
    };

    return (
        <LoadScript googleMapsApiKey={api} loadingElement={<p>Loading...</p>}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={position || center}
                zoom={15}
            >
                {position && <Marker position={position} icon={{
                    url : `${process.env.PUBLIC_URL}/asset/icon/location-dot-solid.svg`,
                    scaledSize : { width : 40, height : 40 },
                    origin : { x : 0, y : 0 },
                    anchor : { x : 20, y : 40 }
                }} label={"A"}  />}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
