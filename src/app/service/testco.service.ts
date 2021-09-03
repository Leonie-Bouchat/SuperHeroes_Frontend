import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BadComponent } from '../shop/componentsShop/bad/bad.component';

@Injectable({
  providedIn: 'root'
})
export class TestcoService {
  //! Constriction de l'URL ne pas toucher cette partie
  private _token : string = '10159385542572346';
  private _url : string = "https://www.superheroapi.com/api.php/"
  private get _full_url(): string {
    return `${this._url}${this._token}/`
  };
  //! ***********************************************


  public id : number = 372;
  public getOne(id:number):Observable<any> {
    return this._http.get<any>(this._url+id);
  
  }
  public idRandom(){
    return (Math.floor(Math.random() * 731)+1);
  }
  
  public echantillon:any[] = [
    69, 476, 729, 598, 644, 140, 517, 303, 487, 414, 687, 579, 522, 731, 423, 370
  ];
  
  

  constructor(private _http: HttpClient) { }
  public getHero(): Observable<any>{
    return this._http.get(`${this._full_url}/${this.idRandom()}`);
  }
  public getHeroById(id:number): Observable<any>{
    return this._http.get(`${this._full_url}/${id}`);
  }
  public getHeroesByName(name:string):Observable<any> {
        return this._http.get(`${this._full_url}search/${name}`);
      }
  // public getGood(id:string): Observable<any>{
  //   return this._http.get(`${this._full_url}/${id}`);
  // }
  // public getBad(id:string): Observable<any>{
  //   return this._http.get(`${this._full_url}/${id}`);
  // }
}
