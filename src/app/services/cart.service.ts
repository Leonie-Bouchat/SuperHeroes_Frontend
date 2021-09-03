import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public selectedHeroes : any[] = [];

  constructor() { }

  public addHeroToCart(product: any){
    this.selectedHeroes.push(product);
    console.log(this.selectedHeroes);
  }


}
