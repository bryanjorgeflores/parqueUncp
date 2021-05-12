import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.page.html',
  styleUrls: ['./paper.page.scss'],
})
export class PaperPage implements OnInit {
  @ViewChild('mySlider', { static: true }) slider: IonSlides;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 300,
    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };
  constructor(
    private nav: NavController,
    private platform: Platform
  ) { }

  ngOnInit(){

  }

  ionViewWillEnter() {
    const width = this.platform.width();
    this.toggleMenu(width);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const newWidth = event.target.innerWidth;
    this.toggleMenu(newWidth);
  }

  toggleMenu(width) {
    if (width > 768) {
      this.slider.options = {
        slidesPerView: 2,
      };
    } else {
      this.slider.options = {
        slidesPerView: 1,
      };
    }
  }

  goBack(){
    this.nav.navigateRoot('papers');
  }

}
