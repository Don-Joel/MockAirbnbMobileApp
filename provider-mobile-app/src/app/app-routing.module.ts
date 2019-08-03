import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'listings', loadChildren: './listings/listings.module#ListingsPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'properties', loadChildren: './properties/properties.module#PropertiesPageModule' },
  { path: 'property-detail', loadChildren: './property-detail/property-detail.module#PropertyDetailPageModule' },
  { path: 'booking', loadChildren: './booking/booking.module#BookingPageModule' },
  { path: 'edit-page', loadChildren: './edit-page/edit-page.module#EditPagePageModule' },
  { path: 'create-property', loadChildren: './create-property/create-property.module#CreatePropertyPageModule' },
  { path: 'delete-property', loadChildren: './delete-property/delete-property.module#DeletePropertyPageModule' },
  { path: 'requests', loadChildren: './requests/requests.module#RequestsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
