import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuToggle,
} from "@ionic/react";
import firebase from "firebase";

export const SideMenu: React.FC = (props: any) => {

  const handleLogout = () => {
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
      localStorage.removeItem('SignedIn');
      // props.history.replace("/home");
    }, function(error) {
      console.error('Sign Out Error', error);
    });

  }

  return (<>
    <IonMenu side="end" contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>הגדרות</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem button routerLink="/contact">
              צור קשר
            </IonItem>
            <IonItem button onClick={handleLogout} routerLink="/home">
              התנתקות
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  </>
);
}
