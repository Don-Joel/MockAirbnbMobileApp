import { Component, OnInit } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";
import { PropertiesService } from ".././services/properties.service";
import { Properties } from ".././models/properties-models";

@Component({
  selector: "app-create-property",
  templateUrl: "./create-property.page.html",
  styleUrls: ["./create-property.page.scss"]
})
export class CreatePropertyPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    public toastController: ToastController,
    private propertiesService: PropertiesService
  ) {}

  public id: number;
  public name: string;
  public price: string;
  public location: string;
  public imageUrl: string;
  public userId: number;
  public providerId: number = +localStorage.getItem("userId");

  ngOnInit() {}

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: err,
      buttons: ["OK"]
    });
    await alert.present();
  }

  createProperty() {
    const listing = {
      name: this.name,
      location: this.location,
      imageUrl: this.imageUrl,
      price: this.price,
      providerId: this.providerId
    };
    this.propertiesService
      .create(listing)
      .then(response => {
        this.navCtrl.navigateForward("properties");
      })
      .catch(err => {
        this.presentAlert(err);
      });
  }
}
