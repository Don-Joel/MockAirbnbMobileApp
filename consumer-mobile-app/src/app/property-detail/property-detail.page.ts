import { Component, OnInit } from "@angular/core";
import { PropertiesService } from ".././services/properties.service";
import { Properties } from ".././models/properties-models";
import { NavController, AlertController } from "@ionic/angular";



@Component({
  selector: "app-properties",
  templateUrl: "./property-detail.page.html",
  styleUrls: ["./property-detail.page.scss"]
})
export class PropertyDetailPage implements OnInit {
  public propertyId : number;
  public id: number;
  public name: string;
  public price: string;
  public location: string;
  public imageUrl: string;
  

  public properties : Array<Properties>;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private propertiesService: PropertiesService,
  ) {}

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: err,
      buttons: ["OK"]
    });
    await alert.present();
  }

  ngOnInit() {
    const params = new URLSearchParams(location.search)
    this.propertiesService.getById(params.get('propertyId')).then((response) => {
      this.name = response[0].name;
      this.price = response[0].price;
      this.location = response[0].location;
      this.imageUrl = response[0].imageUrl;
    }).catch((err) => {
      this.presentAlert(err);
    });
    console.log(params.get('propertyId'));
  }

  navToMenu(){
    this.navCtrl.navigateForward("menu");
  }
}
