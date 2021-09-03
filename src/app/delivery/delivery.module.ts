import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryConfirmationComponent } from './componentsDelivery/delivery-confirmation/delivery-confirmation.component';
import { ChronoComponent } from './componentsDelivery/chrono/chrono.component';


@NgModule({
  declarations: [
    DeliveryConfirmationComponent,
    ChronoComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule
  ]
})
export class DeliveryModule { }
