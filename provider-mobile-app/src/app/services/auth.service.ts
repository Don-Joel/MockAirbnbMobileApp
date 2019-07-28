import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // login(authUser) {
  //   return new Promise((resolve, reject) => {
  //     const headers = new HttpHeaders();

  //     this.http
  //       .post(environment.BaseUrl + '/api/auth/login', authUser, { headers })
  //       .subscribe(
  //         (response: any) => {
  //           console.log(response.id);
  //           localStorage.setItem("userid", response.id);
  //           resolve(response);
  //         },
  //         err => {
  //           console.log(err);
  //           reject(err);
  //         }
  //       );
  //   });
  // }

  login(authUser) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http
        .post(environment.BaseUrl + '/api/auth-provider/login', authUser, { headers })
        .subscribe(
          (response: any) => {
            console.log(response.id);
            localStorage.setItem("userId", response.id);
            resolve(response);
          },
          err => {

            reject(err);
          }
        );
    });
  }
  register(authUser){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.http.post(environment.BaseUrl + '/api/auth-provider/register' , authUser, {headers})
      .subscribe(
        (response: any) => {
          console.log(response.insertId);
          localStorage.setItem("userId", response.insertId);
          resolve(response);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }
}
