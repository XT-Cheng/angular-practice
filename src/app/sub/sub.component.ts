import { Component, OnInit, Input, ChangeDetectionStrategy,OnChanges, DoCheck,ChangeDetectorRef } from '@angular/core';
import { setInterval } from 'timers';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubComponent implements OnInit, OnChanges, DoCheck {
  protected _property: any;

  @Input()
  set property(value: any) {
    console.log(`Input called`);
    this._property = value;
  }

  constructor(private _cd: ChangeDetectorRef) { 
    // setInterval(() => {
    //   console.log('Interval');
    //   this._property
    // },1000);
  }

  ngOnChanges(){
    console.log(`sub onchanges`)
  }

  ngOnInit() {
    console.log(`sub oninit`)
  }

  ngDoCheck() {
    console.log(`sub docheck`)
    //this._cd.markForCheck();
  }

  clicked() {
    console.log('clicked');
  }
}
