import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import * as firebase from 'firebase/app';
// import 'firebase/firestore';
import { Course } from '../model/course';


// const firebaseConfig = {
//   apiKey: "AIzaSyAwLj_8ZdqhP4xCBZIeaZ5t-Zc0H-njbRw",
//   authDomain: "learningfirebase-2b0de.firebaseapp.com",
//   databaseURL: "https://learningfirebase-2b0de.firebaseio.com",
//   projectId: "learningfirebase-2b0de",
//   storageBucket: "learningfirebase-2b0de.appspot.com",
//   messagingSenderId: "21176008169",
//   appId: "1:21176008169:web:9412e7bdabc29f42d8df78"
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Query Single Document
    // db.doc('courses/VBWs8lUo5ZMjxI9cFO8j')
    //   .get()
    //   .then(snap => console.log(snap.data()))
    //   .catch(err => console.log(err));

    // Query Collections
    // db.collection('courses')
    //   .get()
    //   .then(snaps => {
    //     // Map snapshots and get data for each snap including Id
    //     const results: Course[] = snaps.docs.map(snap => { return <Course>{ id: snap.id, ...snap.data() } });
    //     console.log(results);
    //   });
  }

}
