import { Component, OnInit } from '@angular/core';
import { APIlocalService } from 'src/app/services/apilocal.service';


@Component({
  selector: 'app-interruption',
  templateUrl: './interruption.component.html',
  styleUrls: ['./interruption.component.scss']
})
export class InterruptionComponent implements OnInit {
  public xxxInterup:string=''

  constructor(private _api: APIlocalService) { }

  
  
  ngOnInit() {
    this._api.getRandomHero().subscribe(res =>this.xxxInterup=res.name);





    document.documentElement.addEventListener('click', ()=>this.fullScreen());
    // document.documentElement.requestFullscreen();
    document.documentElement.click();
  }
  
  fullScreen() {
    let elem = document.documentElement;
    let methodToBeInvoked = elem.requestFullscreen;
    if (methodToBeInvoked) methodToBeInvoked.call(elem);
  }
}
