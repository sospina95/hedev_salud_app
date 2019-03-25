import  { Injectable } from '@angular/core';
const CONFIG = {
    apiUrls : "http://localhost:3000/api/index"
};
@Injectable({
    providedIn: 'root'
  })
export class AppSettings{

    constructor (){}
    public getApiURL () {
        return CONFIG.apiUrls;
    }
}
