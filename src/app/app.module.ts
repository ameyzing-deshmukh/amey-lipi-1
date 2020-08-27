import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KeypadComponent } from './keypad/keypad.component';
import { InformationComponent } from './information/information.component';
import { MatTableModule } from '@angular/material/table';
import { RachanaComponent } from './rachana/rachana.component';
import { PadComponent } from './pad/pad.component';
import { FooterComponent } from './footer/footer.component';
import { PracticeHomeComponent } from './practice-home/practice-home.component';
import { CreationHomeComponent } from './creation-home/creation-home.component';
import { AnakKeypadComponent } from './anak-keypad/anak-keypad.component';
import { ShankhaKeypadComponent } from './shankha-keypad/shankha-keypad.component';
import { VanshiPracticeHomeComponent } from './vanshi-practice-home/vanshi-practice-home.component';
import { AnakPracticeHomeComponent } from './anak-practice-home/anak-practice-home.component';
import { ShankhaPracticeHomeComponent } from './shankha-practice-home/shankha-practice-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KeypadComponent,
    InformationComponent,
    RachanaComponent,
    PadComponent,
    FooterComponent,
    PracticeHomeComponent,
    CreationHomeComponent,
    AnakKeypadComponent,
    ShankhaKeypadComponent,
    VanshiPracticeHomeComponent,
    AnakPracticeHomeComponent,
    ShankhaPracticeHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
