import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './../main.css';
import './../bootstrap.css';

const Verification: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>

        <div className="page-header green-head">Verification <br/>Code</div>
        <div className="verify">Please enter the verification code sent to <b>+91 635 8768123</b></div>

      </IonContent>
    </IonPage>
  );
};

export default Verification;
