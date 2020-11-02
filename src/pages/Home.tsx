import {
  IonContent,
  IonButton,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
} from "@ionic/react";
import React, { useRef } from "react";
import "./Home.css";
import krovimLogo from "../resources/krovim-trans.png";
import { logInOutline, personAddOutline } from "ionicons/icons";

const Home: React.FC = () => {
  const usernameInputRef = useRef<HTMLIonInputElement>(null);
  const passwordInputRef = useRef<HTMLIonInputElement>(null);

  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <img src={krovimLogo} id="logo" alt="logo" />

          <IonItem className="ion-margin-top" color="white">
            <IonLabel
              className="ion-text-right"
              color="light"
              position="floating"
            >
              שם משתמש
            </IonLabel>
            <IonInput
              className="ion-text-right"
              color="light"
              type="text"
              ref={usernameInputRef}
            ></IonInput>
          </IonItem>

          <IonItem color="white">
            <IonLabel
              className="ion-text-right"
              color="light"
              position="floating"
            >
              סיסמא
            </IonLabel>
            <IonInput
              className="ion-text-right"
              color="light"
              type="password"
              ref={passwordInputRef}
            ></IonInput>
          </IonItem>

          <IonRow className="ion-margin-top">
            <IonCol>
              <IonButton className="ion-text-center" color="light">
                <IonIcon slot="start" icon={personAddOutline} />
                הרשמה
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton className="ion-text-center" color="light">
                <IonIcon slot="start" icon={logInOutline} />
                התחברות
              </IonButton>
            </IonCol>
          </IonRow>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

//
