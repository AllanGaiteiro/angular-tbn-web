import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreAdminService {

  constructor(public db: AngularFirestore) { }
  
  firestore = () => this.db;

  refCollection(path: string): AngularFirestoreCollection<unknown> {
    return this.firestore().collection(path);
  }
  refDoc(path: string): AngularFirestoreDocument<unknown> {
    return this.db.doc(path);
  }

  set(path: string, data: any): Promise<void> {
    return this.db.doc(path).set(data,{merge:true})
  }

  delete(path: string): Promise<void> {
    return this.db.doc(path).delete();
  }
}
