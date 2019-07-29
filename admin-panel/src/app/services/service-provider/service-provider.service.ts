import { Injectable } from '@angular/core';
import { ServiceProvider } from 'src/app/models/service-provider';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ServiceProviderService  {
    public provider: ServiceProvider = new ServiceProvider();

constructor(private http: HttpClient){}
// CRUD:

create(provider: ServiceProvider){
    return new Promise((resolve, reject) =>{
        this.http.post(environment.BaseUrl + '/api/provider/create', provider).subscribe(response => {
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
        this.http.get(environment.BaseUrl + '/api/provider/get').subscribe(response => {
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
        this.http.get(environment.BaseUrl + '/api/provider/getbyid/' + providerId, providerId).subscribe(response =>{
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
        this.http.post(environment.BaseUrl + '/api/provider/update/' + providerId, providerId).subscribe(response =>{
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
        this.http.post(environment.BaseUrl + '/api/provider/delete/' + providerId, providerId).subscribe(response =>{
            resolve(response);
        }),
        err =>{
            console.log(err);
            reject(err.msg);
        }
    });
};
}