import { Component } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";
import { User } from ".././models/user-models";
import { UserService } from ".././services/user.service";
import { AuthService } from ".././services/auth.service";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"], 
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'red'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('5s')
      ]),
      transition('closed => open', [
        animate('5s')
      ]),
    ]),
  ],
})


export class HomePage {
  public user = new User();
  public email: string;
  public password: string;
  public users: any;
  public isOpen : boolean = true;


  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private userService: UserService,
    private authService: AuthService,
  ) {
    this.user = userService.user;
    localStorage.setItem("isLoggedIn", "false");
  }

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: "Incorrect login credentials.",
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
        this.presentAlert(err.error.text);
      });
  }


  toggle() {
    this.isOpen = !this.isOpen;
  }

  logOut() {
    this.authService.logOut();
  }
  navToSaved() {
    this.navCtrl.navigateForward("saved");
  }
  navToHome() {
    this.navCtrl.navigateForward("home");
  }
  navToListings() {
    this.navCtrl.navigateForward("listings");
  }
  navToRegistration() {
    this.navCtrl.navigateForward("registration");
  }
}
