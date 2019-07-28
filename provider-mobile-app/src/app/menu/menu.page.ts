import { Component } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { Router, RouterEvent } from "@angular/router";

@Component({
  selector: "menu-home",
  templateUrl: "menu.page.html",
  styleUrls: ["menu.page.scss"]
})
export class MenuPage {
  constructor(private menu: MenuController, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  selectedPath = "";

  // pages = [
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
  //     loadChildren: "./registration/registration.module#RegistrationPageModule"
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
  // ];

  openFirst() {
    this.menu.enable(true, "first");
    this.menu.open("first");
  }

  openEnd() {
    this.menu.open("end");
  }

  openMenu() {
    this.menu.enable(true, "menu");
    this.menu.open("menu");
  }
}
