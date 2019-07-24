import { Injectable } from '@angular/core';
import { Provider } from '../models/provider-models';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ProviderService {
    public provider: Provider = new Provider();

constructor(private http: HttpClient, private navCtrl: NavController){}
// CRUD:

create(provider: Provider){
    return new Promise((resolve, reject) =>{
        this.http.post(environment.BaseUrl + '/api/user/', provider).subscribe(response => {
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
        this.http.get(environment.BaseUrl + '/api/user/').subscribe(response => {
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};
getById(providerId){
    return new Promise((resolve, reject) => {
        this.http.get(environment.BaseUrl + '/api/user/:id', providerId).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};
updateById(providerId){
    return new Promise((resolve, reject) => {
        this.http.post(environment.BaseUrl + '/api/user/update', providerId).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};

remove(providerId){
    return new Promise((resolve, reject) => {
        this.http.post(environment.BaseUrl + '/api/user/delete', providerId).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};
}