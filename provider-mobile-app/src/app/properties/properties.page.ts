import { Component, OnInit } from "@angular/core";
import { PropertiesService } from ".././services/properties.service";
import { Properties } from ".././models/properties-models";
import { NavController, AlertController } from "@ionic/angular";

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
  public userId: number;
  public params = new URLSearchParams(location.search);
  public providerId: number = +this.params.get("propertyId");

  //array
  public properties: Array<Properties> = [];

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private propertiesService: PropertiesService
  ) {}

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: err,
      buttons: ["OK"]
    });
    await alert.present();
  }

  ionViewDidEnter() {
    this.userId = +localStorage.getItem("userId");
    this.propertiesService
      .getByProviderId(this.userId)
      .then((response: any) => {
        this.properties = response;
      })
      .catch(err => {
        this.presentAlert(err);
      });
  }


  navToDetailsPage(pageId) {
    this.navCtrl.navigateForward("property-detail", {
      queryParams: {
        propertyId: pageId
      }
    });
  }
  navToProfile() {
    this.navCtrl.navigateForward("profile");
  }
  navToHome() {
    this.navCtrl.navigateForward("home");
  }
  navToMenu() {
    this.navCtrl.navigateForward("menu");
  }
  navToCreateListing() {
    this.navCtrl.navigateForward("create-property");
  }
}
