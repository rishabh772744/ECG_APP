import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import OtpInput from 'react-otp-input';

import axios from 'axios';

import './../main.css';
import './../bootstrap.css';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const Verification: React.FC = () => {

  const [otp, setOtp] = useState('');
  const [mobile, setMobile] = useState<string | null>();
  const history = useHistory();

  async function fetchMobile(){
  	const ret = await Storage.get({ key: 'mobile' });
  	setMobile(ret.value)

  	const user = await Storage.get({ key: 'user' });
  	console.log(user)
  }

  function inputOtp(otp){
  	setOtp(otp)
  	if(otp.length == 4){
  		var data = {'mobile': mobile, 'otp': otp}
  		axios
	      .post('http://localhost:8080/api/checkLogin', data)
	      .then(async (res) => {
	        console.log(res)
	        if("success" in res.data){
	        	console.log(res.data)
		        await Storage.set({
		          key: 'user',
		          value: JSON.stringify(res.data.user)
		        });
		        
	        	history.push('/verification-success');
	        }
	        else{
	        	console.log(res.data)
	        	history.push('/verification-fail');
	        }
	      })
	      .catch(err => {
	        console.log(err)
	        history.push('/verification-fail');
	      })
  		
  	}
  }

  fetchMobile()

  return (
    <IonPage>
      	<div className="verification-container">
	        <div className="page-header green-head">Verification <br/>Code</div>
	        <div className="verify">Please enter the verification code sent to <b>{mobile}</b></div>

	        <div className="mx-4 mt-5 text-center">
	        <OtpInput
		        value={otp}
		        onChange={inputOtp}
		        numInputs={4}
		        separator={<span> &nbsp; &nbsp; </span>}
		        containerStyle="otp-container"
		        inputStyle="otp-box"
		        isInputNum={true}
		      />
		     </div>

		     <div className="mt-4 text-white text-center">Didn't get the code? <b>RESEND</b></div>
	    </div>
    </IonPage>
  );
};

export default Verification;
