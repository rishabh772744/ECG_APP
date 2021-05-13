import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAlert, IonButton } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './../main.css';
import './../bootstrap.css';

import { BottomTabs } from './../components/BottomTabs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const Profile: React.FC = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');
  const [avatar, setAvatar] = useState('boy.png');
  const [firstLoad, setFirstLoad] = useState(0);
  const [index, setIndex] = useState(0);
  const [ret, setRet] = useState<any>([]);

  const profilePics = ["boy.png", "girl.png", "man.png", "uncle.png", "aunt.png"]

  const [buttonState, setButtonState] = useState("logout")

  const history = useHistory();

  useEffect(() => {
    setAvatar(profilePics[index])
  }, [index]);

  async function leftScroll(){
    if(index == 0)
      await setIndex(profilePics.length-1)
    else
      await setIndex(index-1)
  }

  async function rightScroll(){
    if(index == profilePics.length-1)
      await setIndex(0)
    else
      await setIndex(index+1)
  }

  function enableInput(){
    var input = document.getElementById("name-input")!;
    input.removeAttribute("disabled");
    input = document.getElementById("dob-input")!;
    input.removeAttribute("disabled");
    input = document.getElementById("mob-input")!;
    input.removeAttribute("disabled");
    setButtonState("save")

    var arrow = document.getElementById("left_arrow")!;
    arrow.style.display = "inline-block";

    arrow = document.getElementById("right_arrow")!;
    arrow.style.display = "inline-block";
  }

  async function saveInputChange(){
    const user = await Storage.get({ key: 'user' });
    var userId = JSON.parse(user!.value!)._id!;

    var input = document.getElementById("name-input")!;
    input.setAttribute('disabled', 'disabled');
    input = document.getElementById("dob-input")!;
    input.setAttribute('disabled', 'disabled');
    input = document.getElementById("mob-input")!;
    input.setAttribute('disabled', 'disabled');

    var arrow = document.getElementById("left_arrow")!;
    arrow.style.display = "none";

    arrow = document.getElementById("right_arrow")!;
    arrow.style.display = "none";

    var data = {'userId': userId, 'name': name, 'dob': dob, 'mobile': mobile, 'avatar': avatar}
    axios
      .post('https://boiling-temple-22884.herokuapp.com/api/updateUser', data)
      .then((res) => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

    await setButtonState("logout");
  }

  const setNameInput = (event) => {
    setName(event.target.value)
  }

  const setDobInput = (event) => {
    setDob(event.target.value)
  }

  const setMobileInput = (event) => {
    setMobile(event.target.value)
  }

  const obtainUserInfo = async () => {
    const user = await Storage.get({ key: 'user' });
    if(user && JSON.parse(user!.value!)){
      var userId = JSON.parse(user!.value!)._id!;
    }

    axios
      .post('https://boiling-temple-22884.herokuapp.com/api/getUser', {userId: userId})
      .then(async (res) => {
        if(firstLoad == 0){
          await setRet(res.data)
          await setFirstLoad(1)
          console.log(ret)

          if("name" in ret!){
            await setName(ret!['name'])
          }
          if("dob" in ret! && ret!['dob']){
            await setDob(ret!['dob'].substring(0, 10))
          }
          if("mobile" in ret!){
            await setMobile(ret!['mobile'])
          }
          if("avatar" in ret!){
            await setAvatar(ret!['avatar'])
          }
        }
      })
      .catch(err => {
        console.log(err)
      })

    
  }

  obtainUserInfo()

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
              handler: async () => {
                console.log('Confirm Okay');
                await Storage.clear();
                history.push('/mobile')
                window.location.reload();
              }
            }
          ]}
        />
        <div className="scroll-container">
          <div className="profile-hero"></div>
          <div className="dp-holder-left" id="left_arrow"><img className="w-100" src="assets/left.png" onClick={leftScroll}/></div>
          <div className="dp-holder-right" id="right_arrow"><img className="w-100" src="assets/right.png" onClick={rightScroll} /></div>
          <div className="dp-holder"><img className="w-100" src={"assets/"+avatar} /></div>
          <div className="edit-placeholder" onClick={enableInput}><FontAwesomeIcon icon={faEdit}/> &nbsp;Edit</div>

          <form className="user-dets mx-4">
            <div className="form-group">
              <label className="mx-1 px-2" style={{color: '#52BF9C'}}>Full Name</label>
              <input id="name-input" type="text" className="mb-3 mx-1 px-2" defaultValue={name} onChange={setNameInput} placeholder="First Name  Last Name" disabled/>
            </div>
            <div className="form-group">
              <label className="mx-1 px-2" style={{color: '#52BF9C'}}>Date of Birth</label>
              <input id="dob-input" type="date" className="mb-3 mx-1 px-2" defaultValue={dob} onChange={setDobInput} placeholder="dd/mm/yy" disabled/>
            </div>
            <div className="form-group">
              <label className="mx-1 px-2" style={{color: '#52BF9C'}}>Mobile Number</label>
              <input id="mob-input" type="text" className="mb-3 mx-1 px-2" defaultValue={mobile} onChange={setMobileInput} placeholder="+91 XXX XXXXXXX" disabled/>
            </div>
          </form>

          <div className="mx-5">
            {buttonState === "logout" ? <div className="my-3 primary-button py-3 px-4 text-center" onClick={() => setShowAlert(true)}>Log Out</div> : <div className="mt-3 primary-button py-3 px-4 text-center" onClick={saveInputChange}>Save Changes</div> }
          </div>
        </div>
        <BottomTabs name="profile" />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
