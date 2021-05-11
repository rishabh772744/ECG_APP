import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './../main.css';
import './../bootstrap.css';

import { BottomTabs } from './../components/BottomTabs';

const Emergency: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>

        <div className="mx-5 mt-3 login-head">Emergency Contacts</div>


          <div className="mx-5 mt-3">
            <div className="p-3 mt-2 contact-card">
              <div className="row">
                <div className="col-3">
                </div>
                <div className="col-9">
                  <span style={{color: '#52BF9C'}}><b>Add New</b></span>
                  <div className="mt-5">
                    Add New Contact
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="p-3 mt-2 contact-card">
                <div className="row">
                  <div className="col-3">
                  </div>
                  <div className="col-9">
                    <span style={{color: '52BF9C'}}><b>Aniruddh Vyas</b></span>
                    <div className="mt-5">
                      +91 986 7347256
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 mt-2 contact-card">
                <div className="row">
                  <div className="col-3">
                  </div>
                  <div className="col-9">
                    <span style={{color: '52BF9C'}}><b>Neha Singh</b></span>
                    <div className="mt-5">
                      +91 986 7347256
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 mt-2 contact-card">
                <div className="row">
                  <div className="col-3">
                  </div>
                  <div className="col-9">
                    <span style={{color: '52BF9C'}}><b>Siddharth Vyas</b></span>
                    <div className="mt-5">
                      +91 986 7347256
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BottomTabs name="emergency" />
      </IonContent>
    </IonPage>
  );
};

export default Emergency;
