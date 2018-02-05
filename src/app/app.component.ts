import { Component ,OnInit, OnChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnChanges, DoCheck {
  property = {name: 'My Apps'};

  constructor() {
    //setInterval(() => {
    //  console.log('Interval');
      this.property.name = 'changed';
    //},3000);
  }

  ngOnInit(): void {
    console.log(`app oninit`);
    //setTimeout(() => this.property.name = `changed`, 5000);
  }

  ngOnChanges(){
    console.log(`app onchanges`)
  }

  ngDoCheck() {
    console.log(`app docheck`)
  }
}

// Interval
// app.component.ts:28 app docheck
// sub.component.ts:15 Input called
// sub.component.ts:27 sub onchanges
// sub.component.ts:35 sub docheck