import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// componenets
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { SearchBoxComponent } from './home/search-box/search-box.component';
import { CardComponent } from './home/search-box/card/card.component';
import { HomeComponent } from './home/home.component';
// services
import {SpotifyService} from './spotify.service';
import { Card2Component } from './home/search-box/card2/card2.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBoxComponent,
    CardComponent,
    HomeComponent,
    Card2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
