import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-quadratic',
  templateUrl: './quadratic.component.html',
  styleUrls: ['./quadratic.component.css']
})
export class QuadraticComponent implements OnInit {

  @ViewChild('gridComp', {static: true})

  xValue: number;
  yValue: number;

  gridComp: GridComponent;

  showGrid = false;
  x: number;
  y: number;

  xCalc = 15;
  yCalc = 15;


  constructor() { }

  ngOnInit() {
  }

  plot() {
    console.log('x, y point from inputs', this.xValue, this.yValue);
    this.showGrid = true;
  }
}
