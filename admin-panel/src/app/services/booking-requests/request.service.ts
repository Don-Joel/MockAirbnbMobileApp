import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from 'src/app/models/request'
import { environment } from 'src/environments/environment';

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

getByPropertyId(propertyId){
    return new Promise((resolve, reject) => {
        this.http.get(environment.BaseUrl + '/api/bookings/getbyPropertyId/' + propertyId, propertyId).subscribe(response =>{
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

remove(id){
    return new Promise((resolve, reject) => {
        this.http.post(environment.BaseUrl + '/api/bookings/delete/', {"id": id}).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};

removeAll(propertyId){
    return new Promise((resolve, reject) => {
        this.http.post(environment.BaseUrl + '/api/bookings/deleteAll/', {"propertyId":propertyId}).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};
};
