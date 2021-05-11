import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import './../main.css';
import './../bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { BottomTabs } from './../components/BottomTabs';

const Emergency: React.FC = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonContent fullscreen>

        <IonModal isOpen={showModal} cssClass='modal-class'>
          <div className="modal-container">
            <div className="text-center mt-5 modal-header-text"><b>New Contact</b></div>
            <form className="container mt-5 mx-1">
              <div className="form-group">
                <input type="email" className="mb-3 mx-1 px-2" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" className="mb-3 mx-1 px-2" placeholder="Mobile Number" />
              </div>
            </form>
            <div className="primary-button py-3 px-4 m-5 text-center" onClick={() => setShowModal(false)}>Done</div>
          </div>
        </IonModal>

        <div className="mx-5 mt-3 login-head">Emergency Contacts</div>


          <div className="mx-5 mt-3">
            <div className="p-3 mt-2 contact-card" onClick={() => setShowModal(true)}>
              <div className="row">
                <div className="col-3">
                  <div className="user-icon text-center">
                    <FontAwesomeIcon icon={faPlusCircle} size="3x"/>
                  </div>
                </div>
                <div className="col-9">
                  <span style={{color: '#52BF9C'}}><b>Add New</b></span>
                  <div className="mt-4">
                    Add New Contact
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="p-3 mt-2 contact-card">
                <div className="row">
                  <div className="col-3">
                    <div className="user-icon text-center">
                      <img src="assets/1.png" />
                    </div>
                  </div>
                  <div className="col-9">
                    <span style={{color: '52BF9C'}}><b>Aniruddh Vyas</b></span>
                    <div className="mt-4">
                      +91 986 7347256
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 mt-2 contact-card">
                <div className="row">
                  <div className="col-3">
                    <div className="user-icon text-center">
                      <img src="assets/1.png" />
                    </div>
                  </div>
                  <div className="col-9">
                    <span style={{color: '52BF9C'}}><b>Neha Singh</b></span>
                    <div className="mt-4">
                      +91 986 7347256
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 mt-2 contact-card">
                <div className="row">
                  <div className="col-3">
                    <div className="user-icon text-center">
                      <img src="assets/1.png" />
                    </div>
                  </div>
                  <div className="col-9">
                    <span style={{color: '52BF9C'}}><b>Siddharth Vyas</b></span>
                    <div className="mt-4">
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
