'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsComponent } from './options.component';


const optionRoute: Routes = [
  { path: '', component: OptionsComponent }
];

@NgModule({
  declarations: [
    OptionsComponent,
  ],
  imports: [
    RouterModule.forChild(optionRoute),
  ],
})
export class OptionsModule {}
