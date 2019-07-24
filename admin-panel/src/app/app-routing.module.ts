import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';

const routes: Routes = [
  {path: '', component: DashBoardComponent},
  {path: 'home', component: DashBoardComponent},
 // {path: 'users',},
 // {path: 'service-providers/:field'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
