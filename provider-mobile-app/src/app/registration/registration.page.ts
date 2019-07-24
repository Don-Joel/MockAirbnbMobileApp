import { Component } from '@angular/core';
import { NavController , AlertController } from '@ionic/angular';
import { Provider } from "../models/provider-models";
import { ProviderService } from "../services/provider.service";
import { AuthService } from ".././services/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.page.html',
  styleUrls: ['registration.page.scss'],
  
})
export class RegistrationPage {

    public user = new Provider();
    public email: string;
    public password: string;
    public users: any;
    public cellPhone: string;
    public surName: string;
    public name: string;
    public role: string;
 
  
    constructor(
      private navCtrl: NavController,
      private alertCtrl: AlertController,
      private providerService: ProviderService,
      private authService: AuthService
    ) {
      this.user = providerService.provider;
    }
    async presentAlert(err) {
      const alert = await this.alertCtrl.create({
        header: "Please fill out all credentials",
        buttons: ["OK"]
      });
      await alert.present();
    }
    register() {
      const authUser = {
        name: this.name,
        surName: this.surName,
        cellPhone: this.cellPhone,
        email: this.email,
        password: this.password,
        role: "user"
      };
      this.authService
        .register(authUser)
        .then(res => {
          const testId = localStorage.getItem("userId");
          console.log(testId);
  
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
 