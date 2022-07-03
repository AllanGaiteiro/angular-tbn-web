import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boock } from '../models/boock';
import { FirestoreAdminService } from './firestore-admin.service';
@Injectable({
  providedIn: 'root'
})
export class BoockService {

  constructor(private admin: FirestoreAdminService) { }

  getBoocks = () => this.admin.refCollection('boocks').valueChanges() as Observable<Boock[]>;
}
