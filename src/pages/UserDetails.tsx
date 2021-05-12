import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import './../main.css';
import './../bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const UserDetails: React.FC = () => {

  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [emerName, setEmerName] = useState('');
  const [emerContact, setEmerContact] = useState('');
  const history = useHistory();

  const setNameInput = (event) => {
    setName(event.target.value)
  }

  const setDobInput = (event) => {
    setDob(event.target.value)
  }

  const setEmerNameInput = (event) => {
    setEmerName(event.target.value)
  }

  const setEmerContactInput = (event) => {
    setEmerContact(event.target.value)
  }

  const submitUserInfo = async () => {
    const user = await Storage.get({ key: 'user' });
    var userId = JSON.parse(user!.value!)._id!;
    var emergency = {'name': emerName, 'contact': emerContact}

    var data = {'userId': userId, 'name': name, 'dob': dob, 'emergency': emergency}
    axios
      .post('http://localhost:8080/api/updateUserInfo', data)
      .then((res) => {
        console.log(res)
        history.push('/home');
      })
      .catch(err => {
        console.log(err)
      })
  }

  const obtainUserInfo = async () => {
    var ret = await Storage.get({ key: 'user' });
    if("name" in JSON.parse(ret!.value!)){
      await setName(JSON.parse(ret!.value!)['name'])
    }
    if("dob" in JSON.parse(ret!.value!)){
      await setDob(JSON.parse(ret!.value!)['dob'].substring(0, 10))
    }
  }

  obtainUserInfo()

  return (
    <IonPage>
      <IonContent fullscreen>

        <div className="left-ellipse"></div>
          <div className="right-ellipse"></div>
          <div className="mid-ellipse"></div>

          <div className="page-header-center text-center">User Details</div>

          <form className="container mt-4 mx-4">
            <div className="form-group">
              <label className="mx-1 px-2">Full Name</label>
              <input type="text" className="mb-3 mx-1 px-2" value={name} onChange={setNameInput} placeholder="First Name  Last Name" />
            </div>
            <div className="form-group">
              <label className="mx-1 px-2">Date of Birth</label>
              <input type="date" className="mb-3 mx-1 px-2" value={dob} onChange={setDobInput} placeholder="dd/mm/yy" />
            </div>
            <div className="form-group">
              <label className="mx-1 px-2">Emergency Contact Name</label>
              <input type="text" className="mb-3 mx-1 px-2" value={emerName} onChange={setEmerNameInput} placeholder="First Name  Last Name" />
            </div>
            <div className="form-group">
              <label className="mx-1 px-2">Emergency Contact Number</label>
              <input type="text" className="mb-3 mx-1 px-2" value={emerContact} onChange={setEmerContactInput} placeholder="+91 XXX XXXXXXX" />
            </div>
          </form>

          <div className="add-contact mx-5 p-2 text-center"><FontAwesomeIcon icon={faPlusCircle} color="green"/>&nbsp; Add more contacts</div>

          <div className="mx-5 mb-5 mt-3 row">
            <div className="col-6">
              <Link to="/home"><button className="p-2 w-100 outline-green text-center">Later</button></Link>
            </div>
            <div className="col-6">
              <button className="p-2 w-100 solid-green text-center" onClick={submitUserInfo}>Done</button>
            </div>
          </div>

      </IonContent>
    </IonPage>
  );
};

export default UserDetails;
