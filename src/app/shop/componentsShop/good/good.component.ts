import { CartService } from './../../../services/cart.service';
import { APIService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { TestcoService } from './../../../service/testco.service';
import { APIlocalService } from 'src/app/services/apilocal.service';


@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {

  public echantillon: any[] = [
    69, 476, 729, 598, 644, 140, 517, 303, 487, 414, 687, 579, 522, 731, 423, 370
  ];
  public full: any[] = [];

  public Heroes: any[] = [];
  private _allGood: any[] = []

  public testHTML: any;
  public good: any;

  public hero = '';
  public align = '';

  private _remplir() {
    for (let x = 1; x < 732; x++) {
      this.full.push(x)
    }
  }
  constructor(private _api: APIlocalService, private _cartService: CartService) { }

  // ? afficher un gentil aéatoire en prenant en compte l'asynchrone 
  // public getOneGood() {
  //   this._api.getRandomHero().subscribe(res => {
  //     this.good = res;
  //     let notFound = this.good.biography.alignment !== "good";
  //     let searching = false;
  //     while (notFound) {
  //       if (!searching) {
  //         this._api.getRandomHero().subscribe(res => {
  //           this.good = res;
  //           searching = false;
  //           notFound = this.good.biography.alignment !== "good";
  //         }
  //         );
  //         searching = true;
  //       }
  //     }
  //   });
  // }
  public setSrc(html: HTMLImageElement) {
    html.src = "../../assets/default.png" //! ajouter une image par défaut pour les heros sans image
  }

  ngOnInit(): void {
    this._api.getRandomHero().subscribe(res => this.testHTML = res);

    this._remplir();

    // ? affiche tous les heros gentils
    for (const id of this.full) {
      this._api.getHeroById(id).subscribe((h) => this.Heroes.push(h));
    }

    // ? affiche tous les heros de l'échantillon
    // for (const id of this.echantillon) {
    //   this._api.getHeroById(id).subscribe((h) => this.Heroes.push(h));
    // }

    //? fonction qui donne un seul hero aléatoire gentil pour le hero du jour
    // this.getOneGood();

    // ? récupère tous les heros 
    // this.full.forEach(element => {
    //   this._api.getHeroById(element).subscribe(res => this._setHero(res));
    // });

    // }
    // ? trie la liste de tous les heros pour ne garder que les 'good'
    // private _setHero(res: any) {
    //   this.align = res.biography.alignment;
    //   this.hero = res.name;
    //   if (this.align === 'good') {
    //     console.log(`${this.hero} est dans la liste des Héros`);
    //   }
  }


  // Ajouter un héro au panier
  public reserveHero(hero:any){
    this._cartService.addHeroToCart(hero);
  }

}
