import { Injectable } from '@angular/core';
import { User } from '../models/user-models';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    public user: User = new User();

constructor(private http: HttpClient, private navCtrl: NavController){}
// CRUD:

create(user: User){
    return new Promise((resolve, reject) =>{
        this.http.post(environment.BaseUrl + '/api/user/create', user).subscribe(response => {
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
        this.http.get(environment.BaseUrl + '/api/user/get').subscribe(response => {
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};
getById(userId){
    return new Promise((resolve, reject) => {
        this.http.get(environment.BaseUrl + '/api/user/getbyid/' + userId, userId).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};
updateById(userId, body){
    return new Promise((resolve, reject) => {
        this.http.post(environment.BaseUrl + '/api/user/update/' + userId, body).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};

remove(userId){
    return new Promise((resolve, reject) => {
        this.http.post(environment.BaseUrl + '/api/user/delete/' + userId, userId).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};
}