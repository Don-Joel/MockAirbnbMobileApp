import { Component } from '@angular/core';
import { NavController , AlertController } from '@ionic/angular';
import { Provider } from "../models/provider-models";
import { ProviderService } from "../services/provider.service";
import { AuthService } from ".././services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {

    public provider = new Provider();
    public email: string;
    public password: string;
    public users: any;
  
    constructor(
      private navCtrl: NavController,
      private alertCtrl: AlertController,
      private providerService: ProviderService,
      private authService: AuthService
    ) {
      this.provider = providerService.provider;
    }
    async presentAlert(err) {
      const alert = await this.alertCtrl.create({
        header: "Incorrect login credentials",
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
          console.log("lol");
  
          this.navCtrl.navigateForward("profile", {
            queryParams: {
              user: res
            }
          }); // first page after login
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
 