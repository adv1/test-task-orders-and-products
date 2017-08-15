'use strict';

import { Routes } from '@angular/router';

import { NavigationMenuComponent } from './navigation-menu.component';
import { orderRoute } from '../orders/orders-route';
import { productRoute } from '../products/products-route';

export const navigationMenuRoutes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: '', component: NavigationMenuComponent,
    children: [
      orderRoute,
      productRoute,
      {
        path: 'groups',
        loadChildren: 'app/lazy-load/groups/groups.module#GroupsModule'
      },
      {
        path: 'users',
        loadChildren: 'app/lazy-load/users/users.module#UsersModule'
      },
      {
        path: 'options',
        loadChildren: 'app/lazy-load/options/options.module#OptionsModule'
      },
    ]
  },
];
