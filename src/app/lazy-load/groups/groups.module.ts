'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './groups.component';


const groupRoute: Routes = [
  { path: '', component: GroupsComponent }
];

@NgModule({
  declarations: [
    GroupsComponent,
  ],
  imports: [
    RouterModule.forChild(groupRoute),
  ],
})
export class GroupsModule {}
