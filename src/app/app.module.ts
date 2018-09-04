import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// componenets
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { SearchBoxComponent } from './home/search-box/search-box.component';
import { CardComponent } from './home/search-box/card/card.component';
import { HomeComponent } from './home/home.component';
// services
import {SpotifyService} from './spotify.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBoxComponent,
    CardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
