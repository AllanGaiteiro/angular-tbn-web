import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Versicle } from 'src/models/versicle';
import { FirestoreAdminService } from './firestore-admin.service';
import { map } from 'rxjs/operators'
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class VersicleService {

  constructor(private admin: FirestoreAdminService) { }

  getVersicle(version: 'aa' | 'acf' | 'nvi', abbrev: string): Observable<unknown> {
    return this.admin.getDoc(`bible/${version}/versicles/${abbrev}`);
  };

  getVersicles = (version: 'aa' | 'acf' | 'nvi', params: any) => {
    const versiclesCollection:AngularFirestoreCollection<unknown> = this.admin.getVersicles(version,params);
    if (params?.verse) {
      return versiclesCollection.valueChanges().pipe(
        map(res => {
          const versicles = res as Versicle[];
          return versicles.filter(v => {
            console.log(params.verse)
            return !!params?.verse ? v.verse?.indexOf(params.verse) > 0 : true;
          });
        }))
    }
    return versiclesCollection.valueChanges();
  };
}