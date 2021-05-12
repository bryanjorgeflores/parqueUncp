import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
    {
      title: 'Ingresar',
      icon: 'log-in',
      url: 'login',
    },
  ];
  constructor(
    private menuCtrl: MenuController,
    private plt: Platform,
    private nav: NavController,
    private searchService: SearchService
  ) {

  }

  ngOnInit() {
    const width = this.plt.width();
    this.toggleMenu(width);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const newWidth = event.target.innerWidth;
    this.toggleMenu(newWidth);
  }

  toggleMenu(width) {
    if (width > 865) {
      this.menuCtrl.enable(false, 'main');
    } else {
      this.menuCtrl.enable(true, 'main');
    }
  }

  goToPage(url) {
    this.nav.navigateRoot(url);
  }

  goToSearch(string) {
    if (string.value.length > 0) {
      localStorage.setItem('search', string.value);
      this.searchService.putSearch(string.value);
      this.nav.navigateRoot('search');
    } else {
      console.log('No hay texto ctm');
    }

  }

}
