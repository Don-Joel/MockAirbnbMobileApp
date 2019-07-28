import { Component, OnInit } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";
import { PropertiesService } from "../services/properties.service";

@Component({
  selector: "app-edit-page",
  templateUrl: "./edit-page.page.html",
  styleUrls: ["./edit-page.page.scss"]
})
export class EditPagePage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private propertiesService: PropertiesService
  ) {}

  public name: string;
  public location: string;
  public price: string;
  public imageUrl: string;
  public propertyId: number = parseInt(localStorage.getItem("propertyId"));


  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: "Error",
      buttons: ["OK"]
    });
    await alert.present();
  }

  ngOnInit() {
    this.propertiesService
      .getById(this.propertyId)
      .then(response => {
        (this.name = response[0].name),
          (this.location = response[0].location),
          (this.price = response[0].price),
          (this.imageUrl = response[0].imageUrl);
      })
      .catch(err => {
        this.presentAlert(err);
      });
  }

  navToPropertyDetails() {
    this.navCtrl.navigateForward("property-detail");
  }

  updateProperty() {
    debugger
    const update = {
      name: this.name,
      location: this.location,
      imageUrl: this.imageUrl,
      price: this.price,
      id: this.propertyId
    };
    console.log(this.propertyId);
    this.propertiesService
      .updateById(this.propertyId, update)
      .then(response => {
        console.log(response);
        this.navCtrl.navigateForward("property-detail");
      })
      .catch(err => {
        this.presentAlert(err);
      });
  }
}
