import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import OtpInput from 'react-otp-input';

import './../main.css';
import './../bootstrap.css';

const Verification: React.FC = () => {

  const [otp, setOtp] = useState('');

  return (
    <IonPage>
      	<div className="verification-container">
	        <div className="page-header green-head">Verification <br/>Code</div>
	        <div className="verify">Please enter the verification code sent to <b>+91 635 8768123</b></div>

	        <div className="mx-4 mt-5 text-center">
	        <OtpInput
		        value={otp}
		        onChange={setOtp}
		        numInputs={4}
		        separator={<span> &nbsp; &nbsp; </span>}
		        containerStyle="otp-container"
		        inputStyle="otp-box"
		      />
		     </div>

		     <div className="mt-4 text-white text-center">Didn't get the code? <b>RESEND</b></div>
	    </div>
    </IonPage>
  );
};

export default Verification;
