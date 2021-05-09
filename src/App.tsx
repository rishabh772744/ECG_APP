import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Mobile from './pages/Mobile';
import Verification from './pages/Verification';
import VerificationSuccess from './pages/VerificationSuccess';
import VerificationFail from './pages/VerificationFail';
import UserDetails from './pages/UserDetails';
import Home from './pages/Home';
import Location from './pages/Location';
import Emergency from './pages/Emergency';
import Profile from './pages/Profile';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/mobile">
          <Mobile />
        </Route>
        <Route exact path="/verification">
          <Verification />
        </Route>
        <Route exact path="/verification-success">
          <VerificationSuccess />
        </Route>
        <Route exact path="/verification-fail">
          <VerificationFail />
        </Route>
        <Route exact path="/user-details">
          <UserDetails />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/location">
          <Location />
        </Route>
        <Route exact path="/emergency">
          <Emergency />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/">
          <Redirect to="/mobile" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
