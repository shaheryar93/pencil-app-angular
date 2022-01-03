import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  constructor() { }
  public static authChangedBeh = new BehaviorSubject<String>('');
  public static authChangedObs = SessionManagerService.authChangedBeh.asObservable();

  public userLoggedInStatusBeh = new BehaviorSubject<boolean>(false);
  public userLoggedInStatusObs = this.userLoggedInStatusBeh.asObservable();

  public serviceRequiredSub = new BehaviorSubject<any>({})
  serviceRequiredObs = this.serviceRequiredSub.asObservable();

  public logout() {
    localStorage.clear();
    SessionManagerService.authChangedBeh.next('login');

  }
  public saveGenericJSON(name, val) {
    localStorage.setItem(name, JSON.stringify(val));
  }

  public setUserLoggedInStatus(val) {
    this.userLoggedInStatusBeh.next(val)
  }


  public getGenericJSON(name) {
    return JSON.parse(localStorage.getItem(name));
  }



  public setValue(key, value) {
    return localStorage.setItem(key, value);
  }

  public getValue(key) {
    return localStorage.getItem(key);
  }

  public static getToken() {
    return localStorage.getItem('token');
  }

  public saveToken(token) {
    localStorage.setItem('token', token);
    SessionManagerService.authChangedBeh.next('home');
  }
}
