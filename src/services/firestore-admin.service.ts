import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
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

  getVersicles(version: 'aa' | 'acf' | 'nvi', params: any):AngularFirestoreCollection<unknown>{
    return this.firestore().collection(`bible/${version}/versicles`, (x) => {
      const { boockAbbrev, chapterNumber, title } = params;

      // search by boock and chapter
      if (boockAbbrev && chapterNumber) return x
        .where('boockAbbrev', '==', boockAbbrev)
        .where('chapterNumber', '==', chapterNumber);

      // search by boock
      if (boockAbbrev) return x
        .where('boockAbbrev', '==', boockAbbrev);

      // search by chapter
      //if (chapterNumber)return x
      //.where('chapterNumber', '==', chapterNumber)

      // search by title
      if (title) return x
        .where('title', '==', title);

      return x
    });
  }

  set(path: string, data: any): Promise<void> {
    return this.db.doc(path).set(data,{merge:true})
  }

  delete(path: string): Promise<void> {
    return this.db.doc(path).delete();
  }
}
