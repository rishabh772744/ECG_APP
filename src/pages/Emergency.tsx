import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './../main.css';
import './../bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { BottomTabs } from './../components/BottomTabs';

import axios from 'axios';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const Emergency: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [emerName, setEmerName] = useState('');
  const [emerContact, setEmerContact] = useState('');
  const [emergency, setEmergency] = useState<any>([]);
  const [firstLoad, setFirstLoad] = useState(0);
  const [userId, setUserId] = useState('');
  const history = useHistory();

  const getEmergencyContacts = async () => {
    const user = await Storage.get({ key: 'user' });
    var userId = JSON.parse(user!.value!)._id!;

    axios
      .post('http://localhost:8080/api/getEmergencyContacts', {userId: userId})
      .then(async (res) => {
        console.log(res.data)
        if(firstLoad == 0){
          await setEmergency(res.data)
          await setFirstLoad(1)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  getEmergencyContacts()

  const setEmerNameInput = (event) => {
    setEmerName(event.target.value)
  }

  const setEmerContactInput = (event) => {
    setEmerContact(event.target.value)
  }

  const submitContactInfo = async () => {
    const user = await Storage.get({ key: 'user' });
    var userId = JSON.parse(user!.value!)._id!;
    var data = {'userId': userId, 'name': emerName, 'contact': emerContact}

    axios
      .post('http://localhost:8080/api/addEmergencyContact', data)
      .then((res) => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })


    await setShowModal(false)
    window.location.reload();
  }



  return (
    <IonPage>
      <IonContent fullscreen>

        <IonModal isOpen={showModal} cssClass='modal-class'>
          <div className="modal-container">
            <div className="text-center mt-5 modal-header-text"><b>New Contact</b></div>
            <form className="container mt-5 mx-1">
              <div className="form-group">
                <input type="text" className="mb-3 mx-1 px-2" value={emerName} onChange={setEmerNameInput} placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="text" className="mb-3 mx-1 px-2" value={emerContact} onChange={setEmerContactInput} placeholder="Mobile Number" />
              </div>
            </form>
            <div className="primary-button py-3 px-4 m-5 text-center" onClick={submitContactInfo}>Done</div>
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
            {emergency.map(contact => ( 
              <div className="p-3 mt-2 contact-card">
                <div className="row">
                  <div className="col-3">
                    <div className="user-icon text-center">
                      <img src="assets/1.png" />
                    </div>
                  </div>
                  <div className="col-9">
                    <span style={{color: '52BF9C'}}><b>{contact['name']}</b></span>
                    <div className="mt-4">
                      {contact['contact']}
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
          <BottomTabs name="emergency" />
      </IonContent>
    </IonPage>
  );
};

export default Emergency;
