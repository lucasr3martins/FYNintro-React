import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroslidePage } from './introslide.page';

const routes: Routes = [
  {
    path: '',
    component: IntroslidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroslidePageRoutingModule {}
