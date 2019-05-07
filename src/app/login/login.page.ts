import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string;
  password:string;
  
  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  }

  goLogin(){
    console.log("Username: ", this.username);
    console.log("password: ", this.password);
    this.navCtrl.goRoot('/home');
    
  }

  goRegister(){
    this.navCtrl.goRoot('/register');
  }

}
