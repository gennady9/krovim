import React, { Fragment } from "react";
import {
  timeOutline,
  peopleOutline,
  videocamOutline,
  calendarOutline,
} from "ionicons/icons";

import { IonButton, IonIcon } from "@ionic/react";
import "./LectureCard.css";

const LectureCard = (props: any) => {
  // console.log(props);
  const { title, desc, viewersCount, zoomLink, date, hour } = props; // add 'author' prop

  return (
    <Fragment>
      <div className="content">
        <div className="meeting-card">
          <h3 className="text">
            נרשמו {viewersCount}{" "}
            <IonIcon className="icon" icon={peopleOutline} />
          </h3>
          <h1>{title}</h1>
          <p>{desc}</p>
          <h5></h5>
          <div className="wrapper">
            <div className="box a">
            {/* <a href={zoomLink}>Zoom Link</a> */}
              <IonButton
                className="ion-text-center ion-margin-top"
                color="none"
                expand="full"
              >
                <a href={zoomLink}>Zoom</a>
                <IonIcon color="dark" slot="start" icon={videocamOutline} />
              </IonButton>
            </div>
            <div className="box b">
              <h4>
                {hour} <IonIcon icon={timeOutline} />
              </h4>
            </div>
            <div className="box c">
              <h4>
                {date} <IonIcon icon={calendarOutline} />
              </h4>
            </div>

          </div>
          <IonButton
                className="ion-text-center"
                color="dark"
                expand="full"
              >
                הרשמה להרצאה
              </IonButton>
        </div>
      </div>
    </Fragment>
  );
};

export default LectureCard;
