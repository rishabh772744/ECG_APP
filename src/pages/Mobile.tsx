import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

import './../main.css';
import './../bootstrap.css';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const Mobile: React.FC = () => {

  const [mobile, setMobile] = useState('');
  const history = useHistory();

  const setMobileInput = (event) => {
    setMobile(event.target.value)
  }

  const loginMobile = () => {
    var data = {'mobile': mobile}
    axios
      .post('http://localhost:8080/api/login', data)
      .then(async (res) => {
        await Storage.set({
          key: 'mobile',
          value: mobile
        });
        console.log(res)
        history.push('/verification');
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <IonPage>
      <IonContent fullscreen>
          <div className="scroll-container">
            <div className="circle-three"></div>
            <div className="circle-two"></div>
            <div className="circle-one"></div>

            <div className="page-header">Mobile <br/>Verification</div>
            
            <div className="page-subtitle">Please enter your mobile number to verify your account</div>

            <div className="mt-4 mx-4">
              <input className="mb-2 mx-1 px-2" type="text" placeholder="Country Code"/>
              <input className="mb-2 mx-1 px-2" type="text" value={mobile} onChange={setMobileInput} placeholder="Mobile Number"/>
            </div>

            
            <div className="my-5 text-center">
              <div className="arrowButton py-3" onClick={loginMobile}><FontAwesomeIcon icon={faArrowRight} size="2x" color="white"/></div>
            </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Mobile;
