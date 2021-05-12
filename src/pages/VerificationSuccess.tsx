import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './../main.css';
import './../bootstrap.css';

import { useHistory } from 'react-router-dom';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const VerificationSuccess: React.FC = () => {

  const history = useHistory();

  async function goToDashboard(){
    const ret = await Storage.get({ key: 'user' });
    if("value" in ret && ret["value"] != null){
      if("emergency" in JSON.parse(ret!.value!) && JSON.parse(ret!.value!)['emergency'].length > 0)
        history.push('/home')
      else
        history.push('/user-details')
      window.location.reload();
    }
  }

  return (
    <IonPage>
      <div className="verification-container">

        <div className="success-icon"></div>
        
        <div className="info-message">Your account has been verified 
                 successfully !</div>

        <div className="land-one"></div>
        <div className="land-two"></div>

        <div className="lady"></div>
        
        <div className="submit-button py-3 px-4 text-center" onClick={goToDashboard}>Done</div>
        

      </div>
    </IonPage>
  );
};

export default VerificationSuccess;
