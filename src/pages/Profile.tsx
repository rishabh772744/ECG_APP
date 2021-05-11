import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAlert, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import './../main.css';
import './../bootstrap.css';

import { BottomTabs } from './../components/BottomTabs';

const Profile: React.FC = () => {

  const [showAlert, setShowAlert] = useState(false);



  return (
    <IonPage>
      <IonContent fullscreen>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass='my-custom-class'
          header={'Log Out?'}
          message={'Are you sure you want to log out?'}
          buttons={[
            {
              text: 'No',
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {
                console.log('Confirm Cancel: blah');
              }
            },
            {
              text: 'Yes',
              handler: () => {
                console.log('Confirm Okay');
              }
            }
          ]}
        />

        <div className="profile-hero"></div>
        <div className="dp-holder"></div>

        <form className="user-dets mx-4">
          <div className="form-group">
            <label className="mx-1 px-2" style={{color: '#52BF9C'}}>Full Name</label>
            <input type="email" className="mb-3 mx-1 px-2" placeholder="First Name  Last Name" />
          </div>
          <div className="form-group">
            <label className="mx-1 px-2" style={{color: '#52BF9C'}}>Date of Birth</label>
            <input type="date" className="mb-3 mx-1 px-2" placeholder="dd/mm/yy" />
          </div>
          <div className="form-group">
            <label className="mx-1 px-2" style={{color: '#52BF9C'}}>Mobile Number</label>
            <input type="email" className="mb-3 mx-1 px-2" placeholder="+91 XXX XXXXXXX" />
          </div>
        </form>

        <div className="mx-5">
          <div className="submit-button py-3 px-4 text-center" onClick={() => setShowAlert(true)}>Log Out</div>
        </div>
        <BottomTabs name="profile" />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
