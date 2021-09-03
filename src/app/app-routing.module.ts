import { AproposComponent } from './componentsIndex/apropos/apropos.component';
import { AccueilComponent } from './componentsIndex/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'accueil', component:AccueilComponent},
  {path:"shop", loadChildren :
    () => import('./shop/shop.module').then(m => m.ShopModule)
  },
  {path:"delivery", loadChildren :
    () => import('./delivery/delivery.module').then(m => m.DeliveryModule)},
  {path:'apropos', component:AproposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
