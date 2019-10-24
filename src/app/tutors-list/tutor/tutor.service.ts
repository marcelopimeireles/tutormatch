import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Tutor } from './tutor.model'

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  constructor(private firestore: AngularFirestore) { }

  getTutors(){
    return this.firestore.collection('tutors').snapshotChanges();
  }

  createTutor(tutor: Tutor){
    return this.firestore.collection('tutors').add(tutor);
  }

  updateTutor(tutor: Tutor){
    delete tutor.id;
    this.firestore.doc('./' + tutor.id).update(tutor);
  }

  deleteTutor(tutorId: string){
    this.firestore.doc('./' + tutorId).delete();
  }
}
