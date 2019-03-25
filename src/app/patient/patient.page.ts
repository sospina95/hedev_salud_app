import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient/patient.service';
import { Patient } from '../models/patient/patient';
import { Refresher } from '@ionic/angular';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
  providers: [PatientService]
})
export class PatientPage implements OnInit {
  public result;
  public refresher: Refresher;
  constructor(private patientService : PatientService) {
    this.getPatients(0);
  }
  ngOnInit() {
  }
  getPatients(refresher) {
    this.patientService.getPatient()
      .subscribe(res => {
        this.result = res;
        this.result = this.result.output;
        console.log("refre",refresher);
        
        if (refresher != 0 ){
          console.log("entre");
          
          refresher.target.complete();
        }
      });
  }
  getItems(ev) {
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.result = this.result.filter(
        (item) => {
          return (item.name.indexOf(val) > -1);
      })
    }else{
      this.getPatients(0);
    }
  }

}
