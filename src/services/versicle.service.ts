import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Versicle } from 'src/models/versicle';
import { FirestoreAdminService } from './firestore-admin.service';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class VersicleService {

  constructor(private admin: FirestoreAdminService) { }

  get(version: 'aa' | 'acf' | 'nvi', abbrev: string): Observable<unknown> {
    return this.admin.getDoc(`bible/${version}/versicles/${abbrev}`);
  };

  getAll = (version: 'aa' | 'acf' | 'nvi', params: any) => this.admin.firestore().collection(`bible/${version}/versicles`, (x) => {
    const { boockAbbrev, chapterNumber, title, verse } = params;

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
  }).valueChanges().pipe(
    map(res => {
    const versicles = res as Versicle[];
    return versicles.filter(v => {
      console.log(params.verse)
      return !!params?.verse ? v.verse?.indexOf(params.verse) > 0 : true;
    });
  }));/*,
    filter((value, i) => {
      console.log(i, (value[i] as Versicle).verse?.indexOf(params.verse) > 0)
      return (value[i] as Versicle).verse?.indexOf(params.verse) > 0
    }));*/
}