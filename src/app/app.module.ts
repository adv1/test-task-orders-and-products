'use strict';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationMenuModule } from './navigation-menu/navigation-menu.module';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NavigationMenuModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
