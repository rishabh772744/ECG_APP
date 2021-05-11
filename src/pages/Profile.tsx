import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAlert, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import './../main.css';
import './../bootstrap.css';

import { BottomTabs } from './../components/BottomTabs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Profile: React.FC = () => {

  const [showAlert, setShowAlert] = useState(false);

  const [buttonState, setButtonState] = useState("logout")

  function enableInput(){
    var input = document.getElementById("name-input")!;
    input.removeAttribute("disabled");
    input = document.getElementById("dob-input")!;
    input.removeAttribute("disabled");
    input = document.getElementById("mob-input")!;
    input.removeAttribute("disabled");
    setButtonState("save")
  }

  function saveInputChange(){
    var input = document.getElementById("name-input")!;
    input.setAttribute('disabled', 'disabled');
    input = document.getElementById("dob-input")!;
    input.setAttribute('disabled', 'disabled');
    input = document.getElementById("mob-input")!;
    input.setAttribute('disabled', 'disabled');
    setButtonState("logout")
  }

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
        <div className="edit-placeholder" onClick={enableInput}><FontAwesomeIcon icon={faEdit}/> &nbsp;Edit</div>

        <form className="user-dets mx-4">
          <div className="form-group">
            <label className="mx-1 px-2" style={{color: '#52BF9C'}}>Full Name</label>
            <input id="name-input" type="text" className="mb-3 mx-1 px-2" placeholder="First Name  Last Name" disabled/>
          </div>
          <div className="form-group">
            <label className="mx-1 px-2" style={{color: '#52BF9C'}}>Date of Birth</label>
            <input id="dob-input" type="date" className="mb-3 mx-1 px-2" placeholder="dd/mm/yy" disabled/>
          </div>
          <div className="form-group">
            <label className="mx-1 px-2" style={{color: '#52BF9C'}}>Mobile Number</label>
            <input id="mob-input" type="text" className="mb-3 mx-1 px-2" placeholder="+91 XXX XXXXXXX" disabled/>
          </div>
        </form>

        <div className="mx-5">
          {buttonState === "logout" ? <div className="submit-button py-3 px-4 text-center" onClick={() => setShowAlert(true)}>Log Out</div> : <div className="submit-button py-3 px-4 text-center" onClick={saveInputChange}>Save Changes</div> }
        </div>
        <BottomTabs name="profile" />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
