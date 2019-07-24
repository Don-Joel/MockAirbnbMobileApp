import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SavedPage } from './saved.page';
var routes = [
    {
        path: '',
        component: SavedPage
    }
];
var SavedPageModule = /** @class */ (function () {
    function SavedPageModule() {
    }
    SavedPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SavedPage]
        })
    ], SavedPageModule);
    return SavedPageModule;
}());
export { SavedPageModule };
//# sourceMappingURL=saved.module.js.map