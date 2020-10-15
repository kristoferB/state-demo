import { APP_INITIALIZER, Component, OnInit } from '@angular/core';

@Component({
  selector: 'statechange',
  templateUrl: './statechange.component.html',
  styleUrls: ['./statechange.component.css']
})
export class StatechangeComponent implements OnInit {
  state = State.init;

  constructor() { }

  ngOnInit(): void {
  }

  clicker(x: string): State {
    switch(this.state) {
      case State.init: {
        if (x == 'a') {
          return State.s1;
        } else if (x == 'b') {
          return State.s4;
        }
        break;
      }
      case State.s1: {
        if (x == 'c') {
          return State.s2;
        }
        break;
      }
      case State.s2:{
        if (x == 'a') {
          return State.s3;
        } else if (x == 'd') {
          return State.s1;
        }
        break;
      }
      case State.s3:{
        if (x == 'b') {
          return State.s4;
        } 
        break;
      }
      case State.s4:{
        if (x == 'c') {
          return State.init;
        } 
        break;
      }
    }
    return this.state;
  }

  enabled_clicker(x: string): boolean {
    return this.state != this.clicker(x);
  }

  onClick(x: string) {
    this.state = this.clicker(x);
  }

  

}

enum State {
  init = "init",
  s1 = "s1",
  s2 = "s2", 
  s3 = "s3",
  s4 = "s4"
}
