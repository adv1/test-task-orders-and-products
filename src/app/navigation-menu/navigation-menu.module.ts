'use strict';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdIconModule, MdSelectModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrdersAndPoductsService } from '../shared/orders-and-poducts.service';

import { NavigationMenuComponent } from './navigation-menu.component';
import { OrderComponent } from '../orders/orders.component';
import { ProductComponent } from '../products/products.component';
import { NgbdModalComponent, NgbdModalContentComponent } from '../orders/popup.component';

import { navigationMenuRoutes } from './navigation-menu.route';

@NgModule({
  declarations: [
    NavigationMenuComponent,
    OrderComponent,
    ProductComponent,
    NgbdModalContentComponent,
    NgbdModalComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdSelectModule,
    MdIconModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(navigationMenuRoutes),
  ],
  providers: [
    OrdersAndPoductsService
  ],
  entryComponents: [
    NgbdModalComponent,
    NgbdModalContentComponent
  ]
})
export class NavigationMenuModule {}
