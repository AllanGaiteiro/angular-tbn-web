import { Injectable } from '@angular/core';
import { FirestoreAdminService } from './firestore-admin.service';
@Injectable({
  providedIn: 'root'
})
export class BoockService  {

  constructor(private admin:FirestoreAdminService) { }

  getBoocks = () => this.admin.getCollection('boocks');
}
