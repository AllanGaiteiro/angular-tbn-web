import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boock } from 'src/models/boock';
import { FirestoreAdminService } from './firestore-admin.service';
@Injectable({
  providedIn: 'root'
})
export class BoockService  {

  constructor(private admin:FirestoreAdminService) { }

  getAll = () => this.admin.getCollection('boocks');
}
