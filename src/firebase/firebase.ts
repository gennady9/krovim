import firebase from "firebase";
import { toast } from "../toast";

import { firebaseApp } from "./fbKey";


const db = firebaseApp.firestore();

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        resolve(user)
      } else{
        resolve(null)
      }
      unsubscribe();
    })
  });
  
}

export function getLectures(){
    return new Promise<any>((resolve, reject) => {        
        db.collection("lectures")
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => doc.data());
          resolve(data);
        })
	});
}

export function registerLecture(lectureName : any){
  return new Promise<any>((resolve, reject) => {        
      db.collection("lectures")
      .get(lectureName)
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        resolve(data);
      })
});
}

// export async function readFeed() {
//   db.collection("lectures")
//     .get()
//     .then((querySnapshot) => {
//       return querySnapshot.docs.map((doc) => doc.data());
//     })
//     .catch(function (error) {
//       console.error("data failed to fetch ", error);
//     });
// }

export async function updateFeed() {
  db.collection("lectures")
    .doc()
    .set({
      title: "צניחת מטוסים",
      author: "יואב המרחף",
      desc:
        "סדנה הכוללת תרגול מעשי של קפיצה ממטוסים",
      zoomLink: "http://bit.ly/3k53g",
      date: "14/12/2020",
      hour: "15:33",
      viewersCount: "5",
    })
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
}

export async function loginUser(email: string, password: string){
    try {
        // const res = 
        await firebase.auth().signInWithEmailAndPassword(email, password);
        // console.log(res);
        return true;
    } catch(error){
        toast(error.message, 4000);
        return false;
    }
}

export async function registerUser(email: string, password: string){
    try {
        // const res = 
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        // console.log(res);
        return true;
    } catch(error){
        toast(error.message, 4000);
        return false;
    }
}