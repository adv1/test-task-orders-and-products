'use strict';

import { Injectable } from '@angular/core';
import { OrdersModel, ProductsModel } from './orders-and-products.model';

@Injectable()
export class OrdersAndPoductsService {

  private _products: ProductsModel[] = [
    {
      id: 1,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Длинное название продукта Product 1',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        {value: 100, symbol: 'USD', isDefault: 0},
        {value: 2600, symbol: 'UAH', isDefault: 1}
      ],
      order: 1,
      date: '2017-06-29 12:09:33'
    },
    {
      id: 2,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Длинное название продукта Product 2',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
      },
      price: [
        {value: 100, symbol: 'USD', isDefault: 0},
        {value: 2600, symbol: 'UAH', isDefault: 1}
      ],
      order: 2,
      date: '2017-06-29 12:09:33'
    }
  ];

  private _orders: OrdersModel[] = [
    {
      id: 1,
      title: 'Длинное название прихода Order 1',
      date: '2017-06-29 12:09:33',
      description: 'desc',
      products: this._products,
    },
    {
      id: 2,
      title: 'Длинное название прихода Order 2',
      date: '2017-06-29 12:09:33',
      description: 'desc',
      products: this._products,
    },
    {
      id: 3,
      title: 'Длинное название прихода Order 3',
      date: '2017-06-29 12:09:33',
      description: 'desc',
      products: this._products,
    },
    {
      id: 4,
      title: 'Длинное название прихода Order 4',
      date: '2017-06-29 12:09:33',
      description: 'desc',
      products: this._products,
    }
  ];


  public getOrders() {
    return Promise.resolve(this._orders);
  }

  public getProducts() {
    let allProducts = [];
    Promise.resolve(this._orders)
      .then(orders => orders.forEach(order => allProducts.push(...order.products)));
    return allProducts;
  }
}


