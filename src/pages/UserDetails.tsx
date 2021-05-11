import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom';
import './../main.css';
import './../bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';

const UserDetails: React.FC = () => {
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
              <input type="email" className="mb-3 mx-1 px-2" placeholder="First Name  Last Name" />
            </div>
            <div className="form-group">
              <label className="mx-1 px-2">Date of Birth</label>
              <input type="date" className="mb-3 mx-1 px-2" placeholder="dd/mm/yy" />
            </div>
            <div className="form-group">
              <label className="mx-1 px-2">Emergency Contact Name</label>
              <input type="email" className="mb-3 mx-1 px-2" placeholder="First Name  Last Name" />
            </div>
            <div className="form-group">
              <label className="mx-1 px-2">Emergency Contact Number</label>
              <input type="email" className="mb-3 mx-1 px-2" placeholder="+91 XXX XXXXXXX" />
            </div>
          </form>

          <div className="add-contact mx-5 p-2 text-center"><FontAwesomeIcon icon={faPlusCircle} color="green"/>&nbsp; Add more contacts</div>

          <div className="mx-5 mb-5 mt-3 row">
            <div className="col-6">
              <button className="p-2 w-100 outline-green text-center">Later</button>
            </div>
            <div className="col-6">
              <Link to="/home"><button className="p-2 w-100 solid-green text-center">Done</button></Link>
            </div>
          </div>

      </IonContent>
    </IonPage>
  );
};

export default UserDetails;
