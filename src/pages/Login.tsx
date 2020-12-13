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
//   import "./Login.css";
  import krovimLogo from "../resources/krovim-trans.png";
  import { logInOutline, personAddOutline } from "ionicons/icons";
  import { loginUser } from "../firebase/firebase";
  import { toast } from "../toast";
  
  const Login: React.FC = (props: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [userAuth, setUserAuth] = useState(false);
  
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
        // setUserAuth(true);
        props.history.push("/feed");
      }
    }
  
    return (
      <IonPage>
        <IonContent>
          <div className="container">
            <IonImg src={krovimLogo} id="logo" alt="logo" />
            <IonTitle className="home-title">
              <b>התחברות</b>
            </IonTitle>
            
            <IonItem className="ion-margin-top" color="white">
              <IonLabel
                className="ion-text-right"
                // color="light"
                position="floating"
              >
                דואר אלקטרוני
              </IonLabel>
              <IonInput
                className="ion-text-right"
                // color="light"
                type="text"
                onIonChange={(e) => setEmail(e.detail.value!)}
              ></IonInput>
            </IonItem>
  
            <IonItem color="white">
              <IonLabel
                className="ion-text-right"
                // color="light"
                position="floating"
              >
                סיסמא
              </IonLabel>
              <IonInput
                className="ion-text-right"
                // color="light"
                type="password"
                onIonChange={(e) => setPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>
  
            <IonRow className="ion-margin-top">
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
            <IonText> ?לא רשום</IonText>
            <IonButton
            className="ion-text-center ion-padding-left"
            color="light"
            routerLink="/register"
          >
            <IonIcon slot="start" icon={personAddOutline} />
            הרשמה
          </IonButton>
          </div>

        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;
