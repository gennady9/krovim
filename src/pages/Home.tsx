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
} from "@ionic/react";
import React, { useRef, useState } from "react";
import "./Home.css";
import krovimLogo from "../resources/krovim-trans.png";
import { logInOutline, personAddOutline } from "ionicons/icons";
import { registerUser, loginUser } from "../firebase";
import { toast } from "../toast";

const Home: React.FC = () => {
  // const usernameInputRef = useRef<HTMLIonInputElement>(null);
  // const passwordInputRef = useRef<HTMLIonInputElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register() {
    // checking if name and password field are working
    if (email.trim() === "" || password.trim() === "") {
      return toast("Username and password are required");
    }
    // validating email
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)) {
      return toast("Not a valid email");
    }

    const res = await registerUser(email, password);
    if (res) {
      toast("You have registered successfully");
      // TODO: go to feed page
    }
  }

  async function login() {
    // checking if name and password field are working
    if (email.trim() === "" || password.trim() === "") {
      return toast("Username and password are required");
    }
    // validating email
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)) {
      return toast("Not a valid email");
    }

    const res = await loginUser(email, password);
    if (res) {
      toast("You have logged successfully");
      // TODO: go to feed page
    }
  }

  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <IonImg src={krovimLogo} id="logo" alt="logo" />

          <IonItem className="ion-margin-top" color="white">
            <IonLabel
              className="ion-text-right"
              color="light"
              position="floating"
            >
              דואר אלקטרוני
            </IonLabel>
            <IonInput
              className="ion-text-right"
              color="light"
              type="text"
              onIonChange={(e) => setEmail(e.detail.value!)}
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
              onIonChange={(e) => setPassword(e.detail.value!)}
            ></IonInput>
          </IonItem>

          <IonRow className="ion-margin-top">
            <IonCol>
              <IonButton
                className="ion-text-center"
                color="light"
                onClick={() => register()}
              >
                <IonIcon slot="start" icon={personAddOutline} />
                הרשמה
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                className="ion-text-center"
                color="light"
                onClick={() => login()}
              >
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

{
  /* <IonButton
className="ion-text-center ion-margin-top"
color="light"
onClick={() => register()}
>
<IonIcon slot="start" icon={personAddOutline} />
הרשמה
</IonButton>


<IonText color="light">?כבר רשום</IonText>
<IonButton className="ion-text-center" color="light">
  <IonIcon slot="start" icon={logInOutline} />
  התחברות
</IonButton> */
}
