import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
    { path: 'trips', loadChildren: './trips/trips.module#TripsPageModule' },
    { path: 'listings', loadChildren: './listings/listings.module#ListingsPageModule' },
    { path: 'saved', loadChildren: './saved/saved.module#SavedPageModule' },
    { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map