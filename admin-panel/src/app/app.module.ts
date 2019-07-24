import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
