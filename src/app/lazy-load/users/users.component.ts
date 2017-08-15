'use strict';

import { Component } from '@angular/core';

@Component({
  template: `
    
    <div style="width: 400px; padding: 30px">
      <h2>{{ title }}</h2>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
      <h3>Some text</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
        Nullam dictum felis eu pede mollis pretium.
      </p>
    </div>
  `
})
export class UsersComponent {
  title = 'Users';
}
