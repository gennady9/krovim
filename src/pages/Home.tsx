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
  IonText,
  IonIcon,
  IonImg,
  IonTitle,
} from "@ionic/react";
import React, { useState } from "react";
import "./Home.css";
import krovimLogo from "../resources/krovim-trans.png";
import { logInOutline, personAddOutline } from "ionicons/icons";

const Home: React.FC = (props: any) => {

  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <IonImg src={krovimLogo} id="logo" alt="logo" />
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