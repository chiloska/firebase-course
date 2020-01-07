import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take, first } from 'rxjs/operators';
import { Course } from '../model/course';

export interface AccountLogItem { description: string; amount: number; }

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private afs: AngularFirestore) { }

  getAll() {
    return this.afs.collection('courses'
      ,
      ref => ref
        .orderBy('seqNo')
      //   .where('seqNo', '>', 0)
      //   .where('seqNo', '<=', 5)
    )
      .snapshotChanges().pipe(
        first(),
        map(snaps => {
          return snaps.map(snap => {
            const data = snap.payload.doc.data() as Course;
            const id = snap.payload.doc.id;
            return <Course>{
              id,
              ...data
            };
          });
        }));
  }

  getAllLogs() {
    return this.afs.collection('courses').auditTrail().pipe(
      map(actions => actions.map(action => {
        const data = action.payload.doc.data() as AccountLogItem;
        const id = action.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}
