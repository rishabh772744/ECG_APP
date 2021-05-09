import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './../main.css';
import './../bootstrap.css';

const VerificationSuccess: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>

        <div className="success-icon"></div>
        
        <div className="info-message">Your account has been verified 
                 successfully !</div>

        <div className="land-one"></div>
        <div className="land-two"></div>

        <div className="lady"></div>
        
        <div className="submit-button mx-5 py-3 px-4 text-center">Done</div>

      </IonContent>
    </IonPage>
  );
};

export default VerificationSuccess;
