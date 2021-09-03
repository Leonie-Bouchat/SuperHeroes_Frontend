import { Link } from './../../modelsIndex/link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public links: Link[];
  constructor() {
    this.links = [];
  }

  // public switchToBad() { }

  ngOnInit(): void {
    this.links.push(new Link('Accueil', '/'))
    this.links.push(new Link('Shop', '/shop'))
    this.links.push(new Link('A Propos', '/apropos'))
    this.links.push(new Link('Panier', '/shop/cart'))
  }

}
