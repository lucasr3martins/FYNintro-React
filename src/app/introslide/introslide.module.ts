import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroslidePageRoutingModule } from './introslide-routing.module';

import { IntroslidePage } from './introslide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroslidePageRoutingModule
  ],
  declarations: [IntroslidePage]
})
export class IntroslidePageModule {}
