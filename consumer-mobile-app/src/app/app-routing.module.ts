import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule', canActivate: [AuthGuard] },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule', canActivate: [AuthGuard]  },
  { path: 'properties', loadChildren: './properties/properties.module#PropertiesPageModule', canActivate: [AuthGuard] },
  { path: 'property-detail', loadChildren: './property-detail/property-detail.module#PropertyDetailPageModule', canActivate: [AuthGuard] },
  { path: 'booking', loadChildren: './booking/booking.module#BookingPageModule',canActivate: [AuthGuard] },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
