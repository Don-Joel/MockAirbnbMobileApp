import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  //JWT login
  // login(authUser) {
  //   return new Promise((resolve, reject) => {
  //     const headers = new HttpHeaders();

  //     this.http
  //       .post(environment.BaseUrl + "/api/auth/login", authUser, { headers })
  //       .subscribe(
  //         (response: any) => {
  //           console.log(response.id);
  //           localStorage.setItem("jwt", response.jwt);
  //           localStorage.setItem("userId", JSON.stringify(response.user.id));
  //           resolve(response);
  //         },
  //         err => {
  //           console.log(err);
  //           reject(err.error.msg);
  //         }
  //       );
  //   });
  // }

  logOut() {
    localStorage.setItem("isLoggedIn", "false");
  }
  logOutJWT() {
    localStorage.setItem("jwt", "");
  }
  //working login
  login(authUser) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http
        .post(environment.BaseUrl + "/api/auth-user/login", authUser, {
          headers
        })
        .subscribe(
          (response: any) => {
            console.log(response.id);
            console.log(response);
            localStorage.setItem("userId", response.id);
            localStorage.setItem("isLoggedIn", "true");
            resolve(response);
          },
          err => {
            reject(err);
          }
        );
    });
  }
  register(authUser) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.http
        .post(environment.BaseUrl + "/api/auth-user/register", authUser, {
          headers
        })
        .subscribe(
          (response: any) => {
            console.log(response.insertId);
            console.log(response);
            localStorage.setItem("userId", response.insertId);
            localStorage.setItem("isLoggedIn", "true");
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
