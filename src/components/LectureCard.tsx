import React, { Fragment } from "react";
import {
  timeOutline,
  peopleOutline,
  videocamOutline,
  calendarOutline,
} from "ionicons/icons";

import { IonContent, IonIcon } from "@ionic/react";
import "./LectureCard.css";

const LectureCard = (props: any) => {
    console.log(props);
    const { title, desc, viewersCount, author, zoomLink, date, hour } = props;

  return (
    <Fragment>
      <div className="content">
        <div className="meeting-card">
          <h3 className="text">
            נרשמו {viewersCount} <IonIcon className="icon" icon={peopleOutline} />
          </h3>
          <h1>{title}</h1>
          <p>{desc}</p>
          <h5></h5>
          <div className="wrapper">
            <div className="box a">
              <h4>
                  {/* TODO: add zoom ref from zoomLink */}
                Zoom <IonIcon icon={videocamOutline} /> 
              </h4>
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
        </div>
      </div>
    </Fragment>
  );
};

export default LectureCard;
