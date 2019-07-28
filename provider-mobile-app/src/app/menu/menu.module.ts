import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { MenuPage } from "./menu.page";

const routes: Routes = [
  {
    path: "menu",
    component: MenuPage,
    // children: [
    //   { path: "home", loadChildren: "./home/home.module#HomePageModule" },
    //   {
    //     path: "profile",
    //     loadChildren: "./profile/profile.module#ProfilePageModule"
    //   },
    //   { path: "trips", loadChildren: "./trips/trips.module#TripsPageModule" },
    //   {
    //     path: "listings",
    //     loadChildren: "./listings/listings.module#ListingsPageModule"
    //   },
    //   { path: "saved", loadChildren: "./saved/saved.module#SavedPageModule" },
    //   {
    //     path: "registration",
    //     loadChildren:
    //       "./registration/registration.module#RegistrationPageModule"
    //   },
    //   { path: "menu", loadChildren: "./menu/menu.module#MenuPageModule" },
    //   {
    //     path: "properties",
    //     loadChildren: "./properties/properties.module#PropertiesPageModule"
    //   },
    //   {
    //     path: "property-detail",
    //     loadChildren:
    //       "./property-detail/property-detail.module#PropertyDetailPageModule"
    //   },
    //   {
    //     path: "booking",
    //     loadChildren: "./booking/booking.module#BookingPageModule"
    //   }
    // ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
