import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KeypadComponent } from './keypad/keypad.component';
import { InformationComponent } from './information/information.component';
import { MatTableModule } from '@angular/material/table';
import { RachanaComponent } from './rachana/rachana.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KeypadComponent,
    InformationComponent,
    RachanaComponent
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
