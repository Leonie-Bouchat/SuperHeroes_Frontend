import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public get selectedHeroes():any[]{
    return this._cartService.selectedHeroes
  }

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.selectedHeroes);
  }

  deleteHero(hero:any){
    // let index = this._cartService.selectedHeroes[hero];
    this._cartService.selectedHeroes = this._cartService.selectedHeroes.filter(h=>h!=hero);
  }


}
