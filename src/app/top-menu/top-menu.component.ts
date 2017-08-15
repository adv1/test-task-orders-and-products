'use strict';

import { Component } from '@angular/core';

@Component({
  selector: 'top-menu',
  template: `
    <div class="container-fluid">
      <div class="top-menu">
        <div class="logo">
          <img src="./assets/images/top-menu.jpg" />
        </div>
        <div class="search">
          <input placeholder="  Поиск">
        </div>
      </div>
      <div class="time-now">
        <div id="day">
          {{ time.toLocaleDateString('ru-RU', { weekday: 'long'}) }}
        </div>
        {{ time.toLocaleDateString('en-GB', options) }}
      </div>
    </div>
  `,
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
  public time = new Date();
  public options = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric'
  };
}
