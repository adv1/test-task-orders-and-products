'use strict';

import { Component } from '@angular/core';

@Component({
  template: `
  <div style="width: 300px; padding: 30px">
    <h2>{{ title }}</h2>
    <h3>Some text</h3>
    <p>
      Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
      Nullam dictum felis eu pede mollis pretium.
    </p>
  </div>
  `
})
export class GroupsComponent {
  title = 'Groups';
}
