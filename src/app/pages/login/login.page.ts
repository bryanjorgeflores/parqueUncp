import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input() isModal;
  @Input() redirectTo;

  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private nav: NavController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private activatedRoute:ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.setValidators();
  }

  setValidators() {
    this.loginForm = this.formBuilder.group({
      usuario: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      password: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
    });
  }

  loginProvider() {
    console.log(this.loginForm.value);
    this.authService.putLoginStatus(true);
    localStorage.setItem('accessToken', 'xddxxdxd');
    if (this.isModal) {
      this.modalCtrl.dismiss();
      console.log(this.redirectTo);
      
      this.nav.navigateForward(this.redirectTo)
    } else{
      this.nav.navigateRoot('');
    }



    // this.authService.loginProvider(this.loginForm.value).subscribe(
    //   (res: any) => {
    //     if (res.code === 200) {
    //       localStorage.setItem('accessToken', res.token);
    //       localStorage.setItem('usuario', JSON.stringify(res.usuario));
    //       this.nav.navigateRoot('home');  
    //     } else {
    //       this.messagesService.showToast('Usuario incorrecto', 'Por favor revise sus credenciales', 'danger');
    //     }
    //   }
    // )
  }
  forgottenPassword() {
    this.alertCtrl.create({
      header: 'Recuperar Contraseña',
      subHeader: 'Ingrese su correo',
      inputs: [
        {
          name: 'usuario_correo',
          placeholder: 'Ejm: parqueuncp@gmail.com',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: (data: any) => {
            console.log('Canceled', data);
          }
        },
        {
          text: 'Enviar',
          handler: (data: any) => {
            this.sendForgottenPassword(data);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }
  sendForgottenPassword(data) {
    console.log(data);

    // this.authService.forgottenPassword(data).subscribe(
    //   (res: any) => {
    //     console.log(res);
    //     this.messagesService.showToast('Genial', 'Se envió la información conrrectamente', 'dark');
    //   }, (err) => {
    //     this.messagesService.showToast('Uy!', 'Verifique que los datos ingresados pertenecen a una cuenta existente', 'danger');
    //   }
    // );
  }

}
