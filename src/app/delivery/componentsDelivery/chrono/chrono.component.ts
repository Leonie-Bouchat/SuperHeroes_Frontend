import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  public seconds: number = 40;
  private _timer: any;
  public state: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.startChrono();


  }

  public startChrono(){
    this._timer = setInterval(() => this.removeOneSecond(), 1000);

    if(this.seconds < 35){
      this.state = true
    }
    return this.seconds;
  }

  private removeOneSecond(){
    this.seconds--;
    if(this.seconds === 35){
      this.stopChrono();
      this._timer = setInterval(() => this.removeOneSecond(), 100);
    }
    if(this.seconds === 1){
      this.stopChrono();
      this.router.navigateByUrl('/interruption');
    }
  }

  public stopChrono(){
    clearInterval(this._timer);
  }
}
