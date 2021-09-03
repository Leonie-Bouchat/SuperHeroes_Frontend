import { DeliveryModule } from './delivery/delivery.module';
import { ShopModule } from './shop/shop.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentsIndex/nav/nav.component';
import { FooterComponent } from './componentsIndex/footer/footer.component';
import { AccueilComponent } from './componentsIndex/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopModule,
    HttpClientModule,
    DeliveryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
