import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { LoginPage } from '../pages/login/login.page';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private modalCtrl: ModalController) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const accesToken = await localStorage.getItem('accessToken');
    if (accesToken) {
      return true;
    } else {
      this.presentModal(route.url[0].path);
    }
  }


  async presentModal(redirectTo) {
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      componentProps: { isModal: true, redirectTo},
      cssClass: 'login'
    });

    await modal.present();

  }
}
