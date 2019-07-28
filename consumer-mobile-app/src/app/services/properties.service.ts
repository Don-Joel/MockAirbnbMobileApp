import { Injectable } from '@angular/core';
import { Properties } from '../models/properties-models';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class PropertiesService {
    public property: Properties = new Properties();

constructor(private http: HttpClient, private navCtrl: NavController){}
// CRUD:

create(property: Properties){
    return new Promise((resolve, reject) =>{
        this.http.post(environment.BaseUrl + '/api/properties/create', property).subscribe(response => {
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
        this.http.get(environment.BaseUrl + '/api/properties/get').subscribe(response => {
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
        this.http.get(environment.BaseUrl + '/api/properties/getbyid/' + Id, Id).subscribe(response =>{
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
        this.http.post(environment.BaseUrl + '/api/properties/update/' + Id, body).subscribe(response =>{
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
        this.http.post(environment.BaseUrl + '/api/properties/delete/' + Id, Id).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};
}