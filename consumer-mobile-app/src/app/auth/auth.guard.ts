import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
//import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router) {
    
  }
 // private jwtHelper : JwtHelperService;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log('AuthGuard#canActivate called');
    return this.checkLogin(localStorage.getItem("isLoggedIn"));
  }

  checkLogin(isLoggedInBoolean: string):boolean{
    //jwt line
    //const isExpired = this.jwtHelper.isTokenExpirerd(jwt);
    if(isLoggedInBoolean == "false"){
      this.router.navigate(["/home"]);
      return false;
    }
    else{
      return true;
    }
  }

  // checkLoginJWT(jwt: string): boolean {
  //   const isExpered = this.jwtHelper.isTokenExpired(jwt);
  //   if (isExpered) {
  //     this.router.navigate(['/login']);
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
 
}
