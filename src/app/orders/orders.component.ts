'use strict';

import { Component, OnInit } from '@angular/core';
import { OrdersAndPoductsService } from '../shared/orders-and-poducts.service';

import { OrdersModel } from '../shared/orders-and-products.model';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrderComponent implements OnInit {
  public orders: Array<OrdersModel> = [];
  public selectedId: number;
  public currentOrder: any;
  public showElem = true;
  public showModal = true;

  constructor(
    public _service: OrdersAndPoductsService,
  ) {}

  public orderSelected(order: OrdersModel) {
    return order.id === this.selectedId;
  }

  public ngOnInit(): Promise<Array<OrdersModel>> {
    return this._service.getOrders()
                          .then(value => this.orders = value );
  }

  public orderOpen(order: OrdersModel): void {
    this.selectedId = order.id;
    this.currentOrder = order;
    this.showElem = false;
    this.showModal = false;
  }

  public modalOpen(): void {
    this.showModal = false;
    this.showElem = false;
  }

  public dateformat(val: string) {
    let date = new Date(val);
    return date;
  }

  public sumPrices(orderProducts) {
    let sumPrices = { sumPricesUsd: 0, sumPricesUah: 0, symbolUah: '' };
    orderProducts.forEach((item) => {
      sumPrices.sumPricesUsd += item.price[0].value;
      sumPrices.sumPricesUah += item.price[1].value;
      sumPrices.symbolUah = item.price[1].symbol;
    });
    return sumPrices;
  }
  public cancel(): void {
    this.currentOrder = false;
    this.showElem = true;
    this.showModal = true;
  }
}
