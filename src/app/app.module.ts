import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { TopbarComponent } from './component/topbar/topbar.component';
import { CardComponent } from './component/card/card.component';
import { DropbarComponent } from './component/dropbar/dropbar.component';
import { TitleComponent } from './component/title/title.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { Profile } from './service/profile.service';
import { FormsModule } from '@angular/forms';
import { Data } from './service/data.service';



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    CardComponent,
    DropbarComponent,
    TitleComponent,
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule ,
    HttpModule,
    AppRoutingModule,

  ],
  providers: [ Profile,Data ],
  bootstrap: [AppComponent],


})
export class AppModule { }
