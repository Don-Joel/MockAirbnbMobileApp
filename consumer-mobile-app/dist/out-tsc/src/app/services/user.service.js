import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { User } from '../models/user-models';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';
var UserService = /** @class */ (function () {
    function UserService(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.user = new User();
    }
    // CRUD:
    UserService.prototype.create = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(environment.BaseUrl + '/api/user/', user).subscribe(function (response) {
                resolve(response);
            }),
                function (err) {
                    console.log(err);
                    reject(err.msg);
                };
        });
    };
    ;
    UserService.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(environment.BaseUrl + '/api/user/').subscribe(function (response) {
                resolve(response);
            }),
                function (err) {
                    console.log(err);
                    reject(err.msg);
                };
        });
    };
    ;
    UserService.prototype.getById = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(environment.BaseUrl + '/api/user/:id', userId).subscribe(function (response) {
                resolve(response);
            }),
                function (err) {
                    console.log(err);
                    reject(err.msg);
                };
        });
    };
    ;
    UserService.prototype.updateById = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(environment.BaseUrl + '/api/user/update', userId).subscribe(function (response) {
                resolve(response);
            }),
                function (err) {
                    console.log(err);
                    reject(err.msg);
                };
        });
    };
    ;
    UserService.prototype.remove = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(environment.BaseUrl + '/api/user/delete', userId).subscribe(function (response) {
                resolve(response);
            }),
                function (err) {
                    console.log(err);
                    reject(err.msg);
                };
        });
    };
    ;
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, NavController])
    ], UserService);
    return UserService;
}());
export { UserService };
;
//# sourceMappingURL=user.service.js.map