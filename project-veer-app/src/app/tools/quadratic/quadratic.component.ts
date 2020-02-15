import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-quadratic',
  templateUrl: './quadratic.component.html',
  styleUrls: ['./quadratic.component.css']
})
export class QuadraticComponent implements OnInit {

  @ViewChild('gridComp', {static: true})
  gridComp: GridComponent;

  showGrid = false;
  x: number;
  y: number;

  constructor() { }

  ngOnInit() {
    this.plot();
  }

  plot() {
    this.showGrid = true;
    this.x = 15;
    this.y = 10;
  }
}
