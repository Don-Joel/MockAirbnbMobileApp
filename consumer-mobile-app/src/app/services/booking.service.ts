import { Injectable } from '@angular/core';
import { Properties } from '../models/properties-models';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Booking } from '../models/booking-models'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }
  create(booking : Booking ){
    return new Promise((resolve, reject) =>{
        this.http.post(environment.BaseUrl + '/api/bookings/create', booking).subscribe(response => {
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};

getAll(){
    return new Promise((resolve, reject) =>{
        this.http.get(environment.BaseUrl + '/api/bookings/get').subscribe(response => {
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};
getById(Id){
    return new Promise((resolve, reject) => {
        this.http.get(environment.BaseUrl + '/api/bookings/getbyid/' + Id, Id).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};
updateById(Id, body){
    return new Promise((resolve, reject) => {
        this.http.post(environment.BaseUrl + '/api/bookings/update/' + Id, body).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};

remove(Id){
    return new Promise((resolve, reject) => {
        this.http.post(environment.BaseUrl + '/api/bookings/delete/' + Id, Id).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};
}
