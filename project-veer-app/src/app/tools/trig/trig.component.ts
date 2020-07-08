import { Component, OnInit } from '@angular/core';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-trig',
  templateUrl: './trig.component.html',
  styleUrls: ['./trig.component.css']
})
export class TrigComponent implements OnInit {

  A: number;
  B: number;
  C: number;
  theta1: number;
  theta2: number;
  theta3: number;
  firstUseCosLaw = false;
  radConversion = Math.PI / 180;


  constructor() { }

  ngOnInit() {
  }

  findInput() {
    if (this.theta1 && this.A && this.B) {
      this.scen1Cos();
      this.firstUseCosLaw = true;
    } else if (this.theta2 && this.A && this.C) {
      this.scen2Cos();
      this.firstUseCosLaw = true;
    } else if (this.theta3 && this.C && this.B) {
      this.scen3Cos();
      this.firstUseCosLaw = true;
    } else {
      alert('Invalid number of inputs');
    }
  }

  clear() {
    this.A = null;
    this.B = null;
    this.C = null;
    this.theta1 = null;
    this.theta2 = null;
    this.theta3 = null;
  }

  scen1Cos() {
    this.C = Math.sqrt( (this.A * this.A + this.B * this.B) + ((-2) *
    this.A * this.B * Math.cos(this.theta1 * this.radConversion)));
  }
  scen2Cos() {
    this.B = Math.sqrt( (this.A * this.A + this.C * this.C) + ((-2) *
    this.A * this.C * Math.cos(this.theta2 * this.radConversion)));
  }
  scen3Cos() {
    this.A = Math.sqrt( (this.B * this.B + this.C * this.C) + ((-2) *
    this.B * this.C * Math.cos(this.theta3 * this.radConversion)));
  }
}
