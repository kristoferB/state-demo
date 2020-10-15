import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  state: [number, number] = [0, 0];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(x: number) {
    if (x == 1 && this.state[0] == 0 && this.state[1] == 0) {
      this.state[0] = 1;
    } else if (x == 2 && this.state[1] == 0) {
      this.state[1] = 1;
    } else if (x == 3 && this.state[0] == 1 && this.state[1] == 0) {
      this.state[0] = 0;
    } else if (x == 4 && this.state[1] == 1) {
      this.state[1] = 0;
    } else if (x == 5 && this.state[0] == 1) {
      this.state[0] = 0;
    }
  }

  enabled_clicker(x: number): boolean {
    return (
      (x == 1 && this.state[0] == 0 && this.state[1] == 0) || 
      (x == 2 && this.state[1] == 0) ||
      (x == 3 && this.state[0] == 1 && this.state[1] == 0) ||
      (x == 4 && this.state[1] == 1) ||
      (x == 5 && this.state[0] == 1)
    );
  }

  

}
