import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class APIService {
    //! Constriction de l'URL ne pas toucher cette partie
    private _token : string = '10159385542572346';
    private _url : string = "https://www.superheroapi.com/api.php/"
    private get _full_url(): string {
      return `${this._url}${this._token}/`
    };
    //! ***********************************************

  // public Batman:Url = "https://www.superheroapi.com/api.php/10159385542572346/69"


  // private _url : string = "https://www.superheroapi.com/api/10159385542572346/";
  
  constructor(private _http: HttpClient) {}

  public getOne(id:number):Observable<any> {
    return this._http.get<any>(this._url+id);
  }

  // foreach x in echantillon{
  //   console.log("https://www.superheroapi.com/api.php/10159385542572346/"+x)
  // }

  // private get _basic_url(): string {
//     return ${this._url}${this._token}/;
//   }


//   public getAllSuperHeroes():Observable<Iprofile[]> {
//     return this._http.get<Iprofile[]>(this._basic_url);
//   }

//   public getOneSuperHeroesByID(id:number):Observable<Iprofile> {
//     return this._http.get<Iprofile>(this._basic_url+id);
//   }

//   public getSuperHeroesByName(name:string):Observable<Iprofile[]> {
//     return this._http.get<Iprofile[]>(this._basic_url+'search/'+name);
//   }

//   export interface Iprofile {
//     id : number ;
//     name : string ;
//     powerstats? : any ;
//     appearence? : any ;
//     gender? : string;
// }

}
