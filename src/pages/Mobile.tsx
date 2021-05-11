import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './../main.css';
import './../bootstrap.css';

const Mobile: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>

          <div className="circle-three"></div>
          <div className="circle-two"></div>
          <div className="circle-one"></div>

          <div className="page-header">Mobile <br/>Verification</div>
          
          <div className="page-subtitle">Please enter your mobile number to verify your account</div>

          <div className="mt-4 mx-4">
            <input className="mb-2 mx-1 px-2" type="text" placeholder="Country Code"/>
            <input className="mb-2 mx-1 px-2" type="text" placeholder="Mobile Number"/>
          </div>

          
          <div className="my-5 text-center">
            <Link to="/verification">
              <div className="arrowButton py-3"><FontAwesomeIcon icon={faArrowRight} size="2x" color="white"/></div>
            </Link>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Mobile;
