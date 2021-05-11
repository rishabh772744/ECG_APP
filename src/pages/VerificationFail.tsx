import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './../main.css';
import './../bootstrap.css';

const VerificationFail: React.FC = () => {
  return (
    <IonPage>
      <div className="verification-container">

        <div className="failure-icon"></div>
        
        <div className="info-message">Verification Failed!</div>

        <div className="land-one"></div>
        <div className="land-two"></div>

        <div className="lady"></div>

        <div className="submit-button py-3 px-4 text-center">Retry</div>

      </div>
    </IonPage>
  );
};

export default VerificationFail;
