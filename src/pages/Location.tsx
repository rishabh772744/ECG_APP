import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useCallback } from 'react';
import './../main.css';
import './../bootstrap.css';

import axios from 'axios';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import { BottomTabs } from './../components/BottomTabs';

const containerStyle = {
  width: 'auto',
  height: '92vh'
};

const Location: React.FC = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAhfIfJ-1-kd3GmpaMe1zGnDK23paLUeiY"
  })

  const [map, setMap] = useState(null)
  const [lat, setLat] = useState(0.0)
  const [long, setLong] = useState(0.0)

  var center = {
    lat: 0,
    lng: 0
  }

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  async function getLocation(){
    axios
        .get('http://api.thingspeak.com/channels/1397317/feeds.json?api_key=8TV4HD1VG0XN611S&results=1')
        .then(async function (response) {
          await setLat(response.data.feeds[0].field1)
          await setLong(response.data.feeds[0].field2)

          center['lat'] = lat;
          center['lng'] = long;

          console.log(center)

        })
  }

  getLocation();


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
