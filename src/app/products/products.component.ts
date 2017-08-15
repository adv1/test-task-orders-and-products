'use strict';

import { Component, OnInit } from '@angular/core';
import { OrdersAndPoductsService } from '../shared/orders-and-poducts.service';
import { ProductsModel } from '../shared/orders-and-products.model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductComponent implements OnInit {
  public products: Array<ProductsModel> = [];

  constructor(
    private _service: OrdersAndPoductsService
  ) {}


  public ngOnInit() {
    return this.products = this._service.getProducts();
  }

  public selectFilter() {
    console.log('filter  products');
  }

  public dateformat(val: string) {
    const date = new Date(val);
    return date;
  }
}
