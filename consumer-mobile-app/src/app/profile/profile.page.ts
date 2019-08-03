import { Component, OnInit } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";
import { User } from ".././models/user-models";
import { UserService } from ".././services/user.service";
import { AuthService } from ".././services/auth.service";
import { ElementFinder } from "protractor";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage{
  public user = new User();
  public name : string;
  public lastName: string;
  public email: string;
  public cellPhone: string;
  

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private alertCtrl: AlertController,
    private navCtrl : NavController
  ) {}

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: "Error",
      buttons: ["OK"]
    });
    await alert.present();
  }

  //basically constructor. ngOnInit is a constructor method but does all the work.
  // It is considered bad practice to carry all the work in the default constructor
  ionViewDidEnter(){
    this.userService
      .getById(parseInt(localStorage.getItem("userId")))
      .then((response: any) => {
          this.name = response[0].name;
          this.lastName = response[0].surName;
          this.email = response[0].email;
          this.cellPhone = response[0].cellPhone;
      })
      .catch(err => {
        this.presentAlert(err)
        ;
      });
  }

  navToHome(){
    this.navCtrl.navigateForward("home");
  }
  navToMenu(){
    this.navCtrl.navigateForward("menu");
  }
  navToProperties(){
    this.navCtrl.navigateForward("properties");
  }
}
