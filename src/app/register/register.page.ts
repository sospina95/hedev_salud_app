import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { PatientService } from '../service/patient/patient.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  customPickerOptions: any;
  public params;
  public bloqueoBoton= false;  
  IdTipoDocumento: any;
  NumeroDocumento: any;
  NombreCompleto: any;
  Apellidos: any;
  Nombres: any;
  FechaNacimiento: any;
  Direccion: any;
  Telefono: any;
  Celular: any;
  Genero: any;
  Email: any;
  IdCreadoPor: any;
  FechaCreacion: any;
  IdEstado: any;
  constructor(public navCtrl : NavController, public patientService : PatientService) {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  ngOnInit() {

  }
  postPatients() {
    this.params = {
      "params":[
        {
          "IdTipoDocumento":this.IdTipoDocumento,
          "NumeroDocumento":this.NumeroDocumento,
          "NombreCompleto":this.Nombres+' '+this.Apellidos,
          "Apellidos":this.Apellidos,
          "Nombres":this.Nombres,
          "FechaNacimiento":this.FechaNacimiento,
          "Direccion":this.Direccion,
          "Telefono":this.Telefono,
          "Celular":this.Celular,
          "Genero":this.Genero,
          "Email":this.Email,
          "IdCreadoPor": 1,
          "FechaCreacion":true,
          "IdEstado":1
        }
      ],
    };
    this.patientService.postPatient(this.params)
      .subscribe(res => {
        console.log(res);
        this.bloqueoBoton = true;
        this.navCtrl.goRoot('/login');
      });
  }
  goLogin(){
    this.navCtrl.goRoot('/login');
  }
}
