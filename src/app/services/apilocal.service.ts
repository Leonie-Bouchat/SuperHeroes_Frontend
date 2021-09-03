import { from, Observable } from 'rxjs';
import { filter,tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIlocalService {
  private _allHero : any[]=[]
  private _allGood : any []=[]
  private _allBad : any []=[]

  private _LocalURL: string ='http://localhost:3000/api'
  
  public IDRandomHero(): number {
    return (Math.floor(Math.random() * 731) + 1);
  }

  constructor(private _localApi: HttpClient) { }


  public getRandomHero(): Observable<any> {
    return this._localApi.get(`${this._LocalURL}/${this.IDRandomHero()}`);
  }



  // ? ***************** Ici les Filter ********************************
  public getAll(): Observable<any> {
    return this._localApi.get<any>(`${this._LocalURL}`);
  }

  public getAllGood() : Observable<any[]>{
    return this.getAll().pipe(
      map(result=>result.results),
      map(result=>result.
        filter((res:any)=>res.biography?.alignment==='good')))
  }

  public getAllBad(): Observable<any[]>{
    return this.getAll().pipe(
      map(result=>result.results),
      map(result=>result.
        filter((res:any)=>res.biography?.alignment==='bad')))
  }

  public getAllByAlign(align:string): Observable<any[]>{
    return this.getAll().pipe(
      map(result=>result.results),
      map(result=>result.
        filter((res:any)=>res.biography?.alignment===align)))
  }
  public getAllByIntel(stat:number): Observable<any[]>{
    return this.getAll().pipe(
      map(result=>result.results),
      map(result=>result.
        filter((res:any)=>res.powerstats?.intelligence >= stat)))

  }
// ? ***********************************************************************************
  


  public getHeroById(id: number): Observable<any> {
    return this._localApi.get(`${this._LocalURL}/${id}`);
















    // public getRandomGoodHero(): Observable<any> {
    //   while (){ }
    //   return this._localApi.get(`${this._LocalURL}/${this.IDRandomHero()}`);
    // }
  }
}
