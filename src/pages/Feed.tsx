import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonPage,
  IonImg,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonAlert,
} from "@ionic/react";
import { Plugins } from "@capacitor/core";
import "./Feed.css";
import krovimLogo from "../resources/krovim-trans.png";
import { getLectures } from "../firebase/firebase";
import LectureCard from "./../components/LectureCard";


const Feed: React.FC = (props: any) => {
  const [lectures, setLectures] = useState([]);
  const { App } = Plugins;
  const [showBackAlert, setShowBackAlert] = useState(false);

  useEffect(() => {
    getLectures().then((data) => {
      setLectures(Object.values(data));
    });
  }, []);

//   document.addEventListener('keyup', function (event) {
//     // Alt+Ctrl+<
//     if (event.altKey && event.ctrlKey && event.keyCode === 188) {
//         triggerBackButton();
//     }
// });

   // listening to ionic back button event
 document.addEventListener('ionBackButton', (ev: any) => {
  ev.detail.register(-1, () => {
    // when you are in your home(last) page
    if (props.history.location.pathname === '/feed') {
      // calling alert box
      setShowBackAlert(true);
    }
  });
});

  return (
    <IonPage id="feed">
      <IonHeader className="feed-header">
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
          <IonImg src={krovimLogo} id="logo" alt="logo" />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {lectures?.map((lecture, i) => (
          <LectureCard key={i} {...lecture} />
        ))}
      </IonContent>

      <IonAlert
          isOpen={showBackAlert}
          header={'אנא אשר'}
          message={'?לצאת מהאפליקציה'}
          buttons={[
            {
              text: 'חזור',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {}
            },
            {
              text: 'צא',
              handler: () => {
                App.exitApp();
              }
            }
          ]}
          onDidDismiss={() => setShowBackAlert(false)}
          cssClass='my-custom-class'
        />
    </IonPage>
  );
};

export default Feed;
