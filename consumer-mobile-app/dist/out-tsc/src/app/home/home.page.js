import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { User } from ".././models/user-models";
import { UserService } from ".././services/user.service";
import { AuthService } from ".././services/auth.service";
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, userService, authService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.authService = authService;
        this.user = new User();
        this.user = userService.user;
    }
    HomePage.prototype.presentAlert = function (err) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Incorrect login credentials",
                            buttons: ["OK"]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.login = function () {
        var _this = this;
        var authUser = {
            email: this.email,
            password: this.password
        };
        this.authService
            .login(authUser)
            .then(function (res) {
            var testId = localStorage.getItem("userId");
            console.log(testId);
            console.log("lol");
            _this.navCtrl.navigateForward("profile", {
                queryParams: {
                    user: res
                }
            }); // first page after login
        })
            .catch(function (err) {
            _this.presentAlert(err);
        });
    };
    HomePage.prototype.navToSaved = function () {
        this.navCtrl.navigateForward("saved");
    };
    HomePage.prototype.navToHome = function () {
        this.navCtrl.navigateForward("home");
    };
    HomePage.prototype.navToListings = function () {
        this.navCtrl.navigateForward("listings");
    };
    HomePage.prototype.navToRegistration = function () {
        this.navCtrl.navigateForward("registration");
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AlertController,
            UserService,
            AuthService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map