import { Component } from '@angular/core';
import { NavController , AlertController } from '@ionic/angular';
import { User } from ".././models/user-models";
import { UserService } from ".././services/user.service";
import { AuthService } from ".././services/auth.service";
import { ElementFinder } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {

    public user = new User();
    public email: string;
    public password: string;
    public users: any;
  
    constructor(
      private navCtrl: NavController,
      private alertCtrl: AlertController,
      private userService: UserService,
      private authService: AuthService
    ) {
      this.user = userService.user;
    }

    async presentAlert(err) {
      const alert = await this.alertCtrl.create({
        header: "Incorrect credentials",
        buttons: ["OK"]
      });
      await alert.present();
    }

    login() {
      const authUser = {
        email: this.email,
        password: this.password
      };
      this.authService
        .login(authUser)
        .then(res => {
          const testId = localStorage.getItem("userId");
          console.log(testId);
          
  
          this.navCtrl.navigateForward("properties"); // first page after login
        })
        .catch(err => {
            this.presentAlert(err);
        });
    }

  navToSaved(){
    this.navCtrl.navigateForward("saved");
  }
  navToHome(){
    this.navCtrl.navigateForward("home");
  }
  navToListings(){
    this.navCtrl.navigateForward("listings");
  }
  navToRegistration(){
    this.navCtrl.navigateForward("registration")
  }
}
 