import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useCallback } from 'react';
import './../main.css';
import './../bootstrap.css';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import { BottomTabs } from './../components/BottomTabs';

const containerStyle = {
  width: 'auto',
  height: '92vh'
};

const center = {
  lat: 25.592147,
  lng: 85.141234
};

const Location: React.FC = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAhfIfJ-1-kd3GmpaMe1zGnDK23paLUeiY"
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])



  return (
    <IonPage>
      <IonContent fullscreen>
      	<div className="scroll-container">
	        { isLoaded ? 
	        <GoogleMap
	        mapContainerStyle={containerStyle}
	        center={center}
	        zoom={15}
	        onLoad={onLoad}
	        onUnmount={onUnmount}
	      	>
	        	{ /* Child components, such as markers, info windows, etc. */ }
	        	<></>
	      	</GoogleMap> : "" }
	      </div>
        <BottomTabs name="location" />
      </IonContent>
    </IonPage>
  );
};

export default Location;
