import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged= new Subject<boolean>();

  constructor() { }
  putLoginStatus(data) {
    this.isLogged.next(data);
  }

  getLoginStatus() {
    return this.isLogged;
  }
}
