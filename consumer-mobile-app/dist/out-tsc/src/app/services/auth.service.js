import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (authUser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            _this.http
                .post(environment.BaseUrl + '/api/auth/login', authUser, { headers: headers })
                .subscribe(function (response) {
                console.log(response.id);
                localStorage.setItem("userid", response.id);
                resolve(response);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.register = function (authUser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            _this.http.post(environment.BaseUrl + '/api/auth/register', authUser, { headers: headers })
                .subscribe(function (response) {
                console.log(response.id);
                localStorage.setItem("userid", response.id);
                resolve(response);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
;
//# sourceMappingURL=auth.service.js.map