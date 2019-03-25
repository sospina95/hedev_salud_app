import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../settings/app-settings';
import { Patient } from '../../models/patient/patient';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  apiUrl = this.appSettings.getApiURL();
  patients = [];
  constructor(public http : HttpClient, public appSettings : AppSettings) { 
  }
  getPatient() {
    let Params = [
      {
        module:'patient',
        view:'listview',
        box_title:'Lista de Pacientes',
        field: [
          {
            name:'id',
            label:'Id',
          },
          {
            name:'type_documents',
            label:'Tipo de documento',
          },
          {
            name:'documents',
            label:'Documento'
          },
          {
            name:'name',
            label:'Paciente'
          },
          {
            name:'birthdate',
            label:'Fecha nacimiento'
          },
          {
            name:'address',
            label: 'Dirección'
          },
          {
            name:'phone',
            label: 'Teléfono'
          },
          {
            name:'cellphone',
            label: 'Celular'
          },
          {
            name:'gender',
            label: 'Género'
          },
          {
            name:'email',
            label: 'Email'
          }
        ],
        to_link : 'documents'
      }
    ];  
    return this.http.post(this.apiUrl, Params);
  }
}
