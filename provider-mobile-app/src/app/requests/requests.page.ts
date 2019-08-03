import { Component, OnInit } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";
import { BookingService } from "../services/booking.service";
import { Booking } from "../models/booking-models";

@Component({
  selector: "app-requests",
  templateUrl: "./requests.page.html",
  styleUrls: ["./requests.page.scss"]
})
export class RequestsPage{
  constructor(
    public navCtrl: NavController,
    public toastController: ToastController,
    private alertCtrl: AlertController,
    private bookingService: BookingService
  ) {}

  public book: Array<Booking> = [];

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: "Error",
      buttons: ["OK"]
    });
    await alert.present();
  }

  async presentGoodToast() {
    const toast = await this.toastController.create({
      message: "Booking accepted!",
      duration: 2000
    });
    toast.present();
  }

  async presentBadToast() {
    const toast = await this.toastController.create({
      message: "Booking denied!",
      duration: 2000
    });
    toast.present();
  }

  ionViewDidEnter(){
    const params = new URLSearchParams(location.search);
    const id = params.get("propertyId");
    this.bookingService
      .getByPropertyId(+id)
      .then((response: any) => {
        this.book = response;
      })
      .catch(err => {
        this.presentAlert(err);
      });
  }
  updateAccept(bookingId) {
    const stat = {
      status: "ACCEPTED",
      id: +bookingId
    };
    this.bookingService
      .updateById(+bookingId, stat)
      .then(response => {
        this.ionViewDidEnter();
        this.presentGoodToast();
      })
      .catch(err => {
        this.presentAlert(err);
      });
  }

  updateDeny(bookingId) {
    const stat = {
      status: "DENIED",
      id: +bookingId
    };

    this.bookingService
      .updateById(+bookingId, stat)
      .then(response => {
        this.ionViewDidEnter() ;
        this.presentBadToast();
      })
      .catch(err => {
        this.presentAlert(err);
      });
  }

  ionRefresh(event) {
    console.log('Pull Event Triggered!');
    setTimeout(() => {
      console.log('Async operation has ended');

      //complete()  signify that the refreshing has completed and to close the refresher
      event.target.complete();
    }, 2000);
}
ionPull(event){
  //Emitted while the user is pulling down the content and exposing the refresher.
  console.log('ionPull Event Triggered!');
}
ionStart(event){
  //Emitted when the user begins to start pulling down.
  console.log('ionStart Event Triggered!');
}

}
