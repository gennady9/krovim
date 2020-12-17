import React from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonToolbar,
} from "@ionic/react";

import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <IonPage id="contact">
      <IonHeader className="feed-header">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/feed" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="contact-center">
          <IonCard>
            <IonCardHeader>
              {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
              <IonCardTitle>ליצירת קשר</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>Jonathan@krovim-app.co.il</IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
