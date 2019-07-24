import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TripsPage } from './trips.page';
var routes = [
    {
        path: '',
        component: TripsPage
    }
];
var TripsPageModule = /** @class */ (function () {
    function TripsPageModule() {
    }
    TripsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TripsPage]
        })
    ], TripsPageModule);
    return TripsPageModule;
}());
export { TripsPageModule };
//# sourceMappingURL=trips.module.js.map