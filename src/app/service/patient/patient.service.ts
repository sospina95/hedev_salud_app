import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../settings/app-settings';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  apiUrl = this.appSettings.getApiURL()+'api/patient';
  patients = [];
  constructor(public http : HttpClient, public appSettings : AppSettings) { 
  }
  postPatient(Params) {
    return this.http.post(this.apiUrl+'/create', Params);
  }
}
