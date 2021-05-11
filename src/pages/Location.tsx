import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './../main.css';
import './../bootstrap.css';

import { BottomTabs } from './../components/BottomTabs';

const Location: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>

        This is Location.
        <BottomTabs name="location" />
      </IonContent>
    </IonPage>
  );
};

export default Location;
