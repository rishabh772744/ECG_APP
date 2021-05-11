import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

import { BottomTabs } from './../components/BottomTabs';

import './../main.css';
import './../bootstrap.css';

const Home: React.FC = () => {

  const [deviceStatus, setDeviceStatus] = useState('off')

  return (
    <IonPage>
    {deviceStatus === "off" ? 
      <IonContent fullscreen>

        <div className="mx-5 mt-3 row no-gutter text-center">
            <div className="col-6 active-button py-2">
              Measure
            </div>
            <div className="col-6 inactive-button py-2">
              History
            </div>
          </div>
          <div className="my-3 mx-5 text-center" style={{ fontFamily: 'Poppins'}}>Device Status: OFF</div>

          <div className="mx-5 text-center" style={{ fontFamily: 'Poppins'}}>
            <img className="heartbeat" src="https://i.ibb.co/RjgJz70/Group-6894.png" />
          </div>

          <div className="mx-5">
            <div className="mt-5">
              Select your most recent activity:
              <div className="mt-3 text-left">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Sleeping
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Sitting
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Walking
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Running
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Workout
                  </label>
                </div>
              </div>
            </div>
            <div className="submit-button py-3 px-4 text-center" onClick={() => setDeviceStatus("on")}>Start</div>
          </div>  

      </IonContent> : ''}
      {deviceStatus === "on" ? 
      <IonContent fullscreen>

        <div className="mx-5 mt-3 row no-gutter text-center">
            <div className="col-6 active-button py-2">
              Measure
            </div>
            <div className="col-6 inactive-button py-2">
              History
            </div>
          </div>
          <div className="my-3 mx-5 text-center" style={{ fontFamily: 'Poppins'}}>Device Status: ON</div>

          <div className="mx-5 text-center bg-dark-heart py-4">
            <div className="bpm-style">72 BPM</div>
            <img className="mt-3 heartbeat-dark" src="https://i.ibb.co/rbXL1ct/Frame.png" />
          </div>

          <div className="my-3 mx-5 text-center">FITNESS STATUS: <b>GOOD</b></div> 

          <div className="text-center py-4">
            <img className="mt-3 line-chart" src="https://i.ibb.co/GMJdwyQ/Line-chart.png" />
          </div>

      </IonContent> : ''}
      <BottomTabs name="home" />
    </IonPage> 
  );
};

export default Home;
