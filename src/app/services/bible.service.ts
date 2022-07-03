import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Versicle } from 'src/app/models/versicle';
import { FirestoreAdminService } from './firestore-admin.service';
import { groupBy, map } from 'rxjs/operators'
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { group } from 'console';
@Injectable({
  providedIn: 'root'
})
export class BibleService {

  constructor(private admin: FirestoreAdminService) { }

  getAllVersiclesOfBoock = (version: string, boockAbbrev: string) => this.admin.refDoc(`bible/${version}`).collection('versicles', (x) => x.where('boockAbbrev', '==', boockAbbrev)).valueChanges();
/*
  getVersicle(version: 'aa' | 'acf' | 'nvi', abbrev: string): Observable<unknown> {
    return this.admin.getDoc(`bible/${version}/versicles/${abbrev}`);
  };

  getVersicles(version: 'aa' | 'acf' | 'nvi', params: any): AngularFirestoreCollection<unknown> {
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
  */
}