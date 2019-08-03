import { Component, OnInit } from "@angular/core";
import { PropertiesService } from ".././services/properties.service";
import { Properties } from ".././models/properties-models";
import { NavController, AlertController } from "@ionic/angular";
import { AuthService } from '../services/auth.service';

@Component({
  selector: "app-properties",
  templateUrl: "./properties.page.html",
  styleUrls: ["./properties.page.scss"]
})
export class PropertiesPage{
  public id: number;
  public name: string;
  public price: string;
  public location: string;
  public imageUrl: string;

  //array
  public properties : Array<Properties> = [];

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private propertiesService: PropertiesService,
    private authService : AuthService
  ) {
    
  }

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: "Error",
      buttons: ["OK"]
    });
    await alert.present();
  }

  ionViewDidEnter(){
    this.propertiesService.getAll().then((response : any) => {
      this.properties = response;
    }).catch((err) => {
      this.presentAlert(err);
    });
  }

  logOut(){
    this.authService.logOut();
  }

  navToDetailsPage(pageId){
    this.navCtrl.navigateForward("property-detail", {
      queryParams: {
       propertyId : pageId
      }

    });
  }
  

  navToMenu(){
    this.navCtrl.navigateForward("menu")
  }

  navToProfile(){
    this.navCtrl.navigateForward("profile")
  }
  navToHome(){
    this.navCtrl.navigateForward("home")
    this.logOut();
  }
}
