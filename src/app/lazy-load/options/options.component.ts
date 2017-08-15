'use strict';

import { Component } from '@angular/core';

@Component({
  template: `
    <div style="width: 300px; padding: 30px">
      <h2>{{ title }}</h2>
      <h3>Some text</h3>
      <ul>
        <li>Lorem ipsum</li>
        <li>sit amet</li>
        <li>Cum commodo</li>
      </ul>
    </div>
    
  `
})
export class OptionsComponent {
  title = 'Options';
}
