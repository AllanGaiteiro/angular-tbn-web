import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreAdminService {

  constructor(public db: AngularFirestore) { }
  
  firestore = () => this.db;

  getCollection(path: string): Observable<unknown[]> {
    return this.db.collection(path).valueChanges();
  }

  getDoc(path: string): Observable<unknown> {
    return this.db.doc(path).valueChanges();
  }

  set(path: string, data: any): Promise<void> {
    return this.db.doc(path).set(data,{merge:true})
  }

  delete(path: string): Promise<void> {
    return this.db.doc(path).delete();
  }
}
