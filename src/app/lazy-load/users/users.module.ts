'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';


const optionRoute: Routes = [
  { path: '', component: UsersComponent }
];

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    RouterModule.forChild(optionRoute),
  ],
})
export class UsersModule {}
