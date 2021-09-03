import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { GoodComponent } from './componentsShop/good/good.component';
import { BadComponent } from './componentsShop/bad/bad.component';
import { CartComponent } from './componentsShop/cart/cart.component';


@NgModule({
  declarations: [
    GoodComponent,
    BadComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  exports: [
  ]
})
export class ShopModule { }
