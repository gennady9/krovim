import {
  IonContent,
  IonButton,
  IonPage,
  IonIcon,
  IonImg,
  IonTitle,
} from "@ionic/react";
import React, { useEffect } from "react";
import "./Home.css";
import krovimLogo from "../resources/krovim-trans.png";
import { logInOutline, personAddOutline } from "ionicons/icons";
import { getCurrentUser } from "../firebase/firebase";

const Home: React.FC = (props: any) => {
  
  useEffect(() => {

    if(localStorage.getItem('SignedIn')){
      console.log('signed in detected in storage');
      props.history.push("/feed");
    }

    getCurrentUser().then((user) => {
      if (user) {
        localStorage.setItem('SignedIn', '1');
        props.history.push("/feed");
      } else {
        localStorage.removeItem('SignedIn');
        // window.history.replaceState({}, '' ,'/home');
      }
    });
  }, [props.history]);

  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <IonImg src={krovimLogo} alt="logo" />
          <IonTitle className="home-title">
            ברוכים הבאים לאפליקציית קרובים
          </IonTitle>
          <IonButton
            className="ion-text-center "
            color="light"
            routerLink="/register"
          >
            <IonIcon slot="start" icon={personAddOutline} />
            הרשמה
          </IonButton>

          <IonButton
            className="ion-text-center ion-margin-top"
            color="light"
            routerLink="/login"
          >
            <IonIcon slot="start" icon={logInOutline} />
            התחברות
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;