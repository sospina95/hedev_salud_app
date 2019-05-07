import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public appPages;
  constructor (){
    this.appPages = [
      {
        title: 'Home',
        url: '/home',
        icon: 'home'
      },
      {
        title: 'List',
        url: '/list',
        icon: 'list'
      },
      {
        title: 'Pacientes',
        url: '/patient',
        icon: 'bed'
      },
      {
        title: 'Salir',
        url: '/login',
        icon: 'exit'
      },
    ];
    console.log(this.appPages);
    
  }
}
