import { InterruptionComponent } from './componentsDelivery/interruption/interruption.component';
import { ChronoComponent } from './componentsDelivery/chrono/chrono.component';
import { DeliveryConfirmationComponent } from './componentsDelivery/delivery-confirmation/delivery-confirmation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'confirmation', pathMatch: 'full'},
  {path:'confirmation', component: DeliveryConfirmationComponent},
  {path:'chrono', component: ChronoComponent},
  {path:'interruption', component:InterruptionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
