import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menuOptions = [
    {
      title: 'Inicio',
      icon: 'home',
      url: 'home',
    },
    {
      title: 'Empresas',
      icon: 'business',
      url: 'business',
    },
    {
      title: 'Investigaciones',
      icon: 'albums',
      url: 'papers'
    },
    {
      title: 'Sobre Nosotros',
      icon: 'person',
      url: 'about-us',
    },
    {
      title: 'Contáctanos',
      icon: 'help-circle',
      url: 'contact-us',
    },
  ];
  selectedIndex = 0;
  splitPaneState: boolean;
  isLogged: any;

	constructor(public platform: Platform, private authService: AuthService, private nav: NavController) {
		this.splitPaneState = false;
    this.isLogged = Boolean(localStorage.getItem('isLogged')=== 'true');
    this.authService.getLoginStatus().subscribe(
      (res)=>{
        this.isLogged = res;
      }, err=>{
        console.log(err);        
      }
    )
	}

	setSplitPane(state: boolean) {
		if (this.platform.width() > 992) {
			this.splitPaneState = state;
		} else {
			this.splitPaneState = false;
		}
	}

	getSplitPane() {
		return this.splitPaneState;
	}

  logIn(){
    this.nav.navigateRoot('login');
  }

  logOut(){
    this.authService.putLoginStatus(false);
    localStorage.removeItem('accessToken');
    localStorage.setItem('isLogged', 'false');
    // window.location.replace('');
    this.nav.navigateRoot('');
  }
}
