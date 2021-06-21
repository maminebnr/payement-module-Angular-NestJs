import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayementRoutingModule } from './payement-routing.module';
import {  PayementComponent} from './payement.component';

@NgModule({
  declarations: [
    PayementComponent
  ],
  imports: [
    CommonModule,
    PayementRoutingModule,
  ]
})
export class PayementModule { }
