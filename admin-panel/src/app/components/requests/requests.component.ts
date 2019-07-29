import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking-requests/request.service';
import { Booking } from 'src/app/models/request';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private bookingService : BookingService) { }

  public bookings : Array<Booking> =[];

  ngOnInit() {
    this.bookingService.getAll().then((response : any) => {
      this.bookings = response;
    }).catch((err) => {
    });
  }

}
