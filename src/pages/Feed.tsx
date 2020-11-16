import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonImg } from "@ionic/react";

import "./Feed.css";
import krovimLogo from "../resources/krovim-trans.png";
import { updateFeed, getLectures } from "./../firebase";
import LectureCard from "./../components/LectureCard";
import {
  timeOutline,
  peopleOutline,
  videocamOutline,
  calendarOutline,
} from "ionicons/icons";

const Feed: React.FC = () => {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    // updateFeed();

    getLectures().then((data) => {
      // console.log(data);
      console.log(Object.values(data));
      setLectures(Object.values(data));
    });
  }, []);

  return (
    <IonPage>
      <div className="header">
        <h1 />
        <IonImg src={krovimLogo} id="logo" alt="logo" />
        <h1></h1>
      </div>
      <IonContent>
        {lectures?.map((lecture, i) => (
          <LectureCard key={i} {...lecture} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Feed;
