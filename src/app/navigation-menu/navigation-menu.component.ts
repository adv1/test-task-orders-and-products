'use strict';

import { Component } from '@angular/core';

@Component({
  selector: 'navigation-menu',
  template: `
    <div class="container-fluid">
      <div class="nav-menu">
        <div class="logoUser">
          <img src="./assets/images/login-icon.jpg" />
        </div>
        <div>
          <a routerLink="/orders" routerLinkActive="active">Приход</a>
        </div>
        <div>
          <a routerLink="/groups" routerLinkActive="active">Группы</a>
        </div>
        <div>
          <a routerLink="/products" routerLinkActive="active">Продукты</a>
        </div>
        <div>
          <a routerLink="/users" routerLinkActive="active">Пользователи</a>
        </div>
        <div>
          <a routerLink="/options" routerLinkActive="active">Настройки</a>
        </div>
      </div>
      <div class="router-block">
        <div class="router-out">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
    `,
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent { }
