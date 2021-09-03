import { Component, OnInit } from '@angular/core';
import { APIlocalService } from 'src/app/services/apilocal.service';


@Component({
  selector: 'app-delivery-confirmation',
  templateUrl: './delivery-confirmation.component.html',
  styleUrls: ['./delivery-confirmation.component.scss']
})
export class DeliveryConfirmationComponent implements OnInit {
  public xxxInterup:string=''

  constructor(private _api: APIlocalService) { }
  
  
  
  ngOnInit(): void {
    this._api.getRandomHero().subscribe(res =>this.xxxInterup=res.name);
  }

}
