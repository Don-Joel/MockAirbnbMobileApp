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
export class RequestsPage implements OnInit {
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

  ngOnInit() {
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

  updateAccept() {
    const params = new URLSearchParams(location.search);
    const propId = params.get("propertyId");
    const stat = {
      status: "ACCEPTED"
    };

    this.bookingService
      .updateById(+propId, stat)
      .then(response => {
        this.presentGoodToast();
      })
      .catch(err => {
        this.presentAlert(err);
      });
  }

  updateDeny() {
    const params = new URLSearchParams(location.search);
    const propId = params.get("propertyId");
    const stat = {
      status: "DENIED",
      id: +propId
    };

    this.bookingService
      .updateById(+propId, stat)
      .then(response => {
        this.presentBadToast();
      })
      .catch(err => {
        this.presentAlert(err);
      });
  }
}
