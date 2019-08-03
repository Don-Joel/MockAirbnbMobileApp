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
export class PropertyDetailPage{

  public propertyId : number;
  public id: number;
  public name: string;
  public price: number;
  public userId : number;
  public location: string;
  public imageUrl: string;
  public today = new Date();
  public dateTo = new Date().toISOString();

  //making new data and parsing it into a string
  public dateFrom = new Date().toISOString();
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
      message: 'Booked!',
      duration: 2000
    });
    toast.present();
  }


  ionViewDidEnter(){
    const params = new URLSearchParams(location.search)
    const id = +params.get('propertyId');

    this.propertiesService.getById(id).then((response) => {
      this.name = response[0].name;
      this.price = parseInt(response[0].price);
      this.location = response[0].location;
      this.imageUrl = response[0].imageUrl;
      this.propertyId = id;
      console.log(this.dateFrom);
      console.log(this.dateTo);
    }).catch((err) => {
      this.presentAlert(err);
    });
    console.log(params.get('propertyId'));
  }
  navToMenu(){
    this.navCtrl.navigateForward("menu");
  }

  //checking for date values
  dateToChanged(date){
    console.log(date.detail.value);
    console.log(this.dateTo);
  }

  dateFromChanged(date){
    //value after change
    console.log(date.detail.value);
    //my dateFrom value 
    console.log(this.dateFrom);
  }


    book(){
      const booker = {
            dateFrom : this.dateFrom,
            dateTo : this.dateTo,
            userId : +localStorage.getItem("userId"),
            propertyId : this.propertyId,
            status : this.status.newBooking
      };
      this.bookingService.create(booker).then((response) => {
        this.presentToast();
        
      }).catch((err) => {
        this.presentAlert(err);
      });

    }
}
