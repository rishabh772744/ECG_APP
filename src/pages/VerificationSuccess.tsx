import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './../main.css';
import './../bootstrap.css';

import { Link } from 'react-router-dom';

const VerificationSuccess: React.FC = () => {
  return (
    <IonPage>
      <div className="verification-container">

        <div className="success-icon"></div>
        
        <div className="info-message">Your account has been verified 
                 successfully !</div>

        <div className="land-one"></div>
        <div className="land-two"></div>

        <div className="lady"></div>
        
        <Link to="/home">
          <div className="submit-button py-3 px-4 text-center">Done</div>
        </Link>

      </div>
    </IonPage>
  );
};

export default VerificationSuccess;
