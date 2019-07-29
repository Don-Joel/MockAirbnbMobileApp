import { Component, OnInit } from "@angular/core";
import { PropertiesService } from ".././services/properties.service";
import { Properties } from ".././models/properties-models";
import { BookingService } from ".././services/booking.service"
import { NavController, AlertController } from "@ionic/angular";
import { ToastController } from '@ionic/angular';




@Component({
  selector: "app-properties",
  templateUrl: "./property-detail.page.html",
  styleUrls: ["./property-detail.page.scss"]
})
export class PropertyDetailPage implements OnInit {

  public propertyId : string;
  public name: string;
  public price: number;
  public userId : number;
  public location: string;
  public imageUrl: string;
  //propertyId
  public id : string;



  //making new data and parsing it into a string
  public status = {
    newBooking: "NEW",
    accepted: "ACCEPTED",
    rejected: "REJECTED"
  };
  
  

  public properties : Array<Properties>;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private propertiesService: PropertiesService,
    private bookingService : BookingService,
    public toastController: ToastController
  ) {}

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: "Error",
      buttons: ["OK"]
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Edited!',
      duration: 2000
    });
    toast.present();
  }

  async presentDeleteToast() {
    const toast = await this.toastController.create({
      message: 'Listing has been removed.',
      duration: 2000
    });
    toast.present();
  }


  ngOnInit() {
    const params = new URLSearchParams(location.search);
    this.id = params.get('propertyId');
    localStorage.setItem("propertyId", this.id);

    this.propertiesService.getById(this.id).then((response) => {
      this.name = response[0].name;
      this.price = parseInt(response[0].price);
      this.location = response[0].location;
      this.imageUrl = response[0].imageUrl;
      this.propertyId = this.id;
    }).catch((err) => {
      this.presentAlert(err);
    });
    console.log(params.get('propertyId'));
  }

  deleteBookings(){
    const ident = {
      propertyId: +this.id
    }
    this.bookingService.removeAll(ident).then((response) => {
      this.presentDeleteToast();
    }).catch((err) => {
      this.presentAlert(err);
    });
  }

  deleteProperty(){
    const ident = {
      id: +this.id
    }
    console.log(ident.id);
    this.deleteBookings();
    this.propertiesService.remove(ident).then((result) => {
    }).catch((err) => {
      
    });
  }
  navToMenu(){
    this.navCtrl.navigateForward("menu");
  }
  navToProperties(){
    this.navCtrl.navigateForward("properties");
  }

  navToEditPage(){
    this.navCtrl.navigateForward("edit-page");
  }

  navToRequest(pageId){
    this.navCtrl.navigateForward("requests",  {
      queryParams: {
       propertyId : pageId
      } });
  }

}
