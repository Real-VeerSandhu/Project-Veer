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
  degreeConversion = 180 / Math.PI;
  anglesOver180 = false;


  constructor() { }

  ngOnInit() {
  }

  findInput() {
    // this.checkAngleRule();
    if (this.theta1 && this.A && this.B) {
      this.scen1Cos();
      this.firstUseCosLaw = true;
    } else if (this.theta2 && this.A && this.C) {
      this.scen2Cos();
      this.firstUseCosLaw = true;
    } else if (this.theta3 && this.C && this.B) {
      this.scen3Cos();
      this.firstUseCosLaw = true;
    } else if (this.theta1 && this.theta2 && this.B) {
      this.scen1Sin();
    } else if (this.theta1 && this.theta2 && this.C) {
      this.scen2Sin();
    } else if (this.theta2 && this.theta3 && this.A) {
      this.scen3Sin();
    } else if (this.theta2 && this.theta3 && this.B) {
      this.scen4Sin();
    } else if (this.theta1 && this.theta3 && this.C) {
      this.scen5Sin();
    } else if (this.theta1 && this.theta3 && this.A) {
      this.scen6Sin();
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
    this.C = (Math.sqrt( (this.A * this.A + this.B * this.B) + ((-2) *
    this.A * this.B * Math.cos(this.theta1 * this.radConversion))));
    this.theta2 = (Math.asin((Math.sin(this.theta1 * this.radConversion) * this.B) / this.A) * this.degreeConversion);
    this.theta3 = 180 - (this.theta1 + this.theta2);
  }

  scen2Cos() {
    this.B = (Math.sqrt( (this.A * this.A + this.C * this.C) + ((-2) *
    this.A * this.C * Math.cos(this.theta2 * this.radConversion))));
    this.theta1 = (Math.asin((Math.sin(this.theta2 * this.radConversion) * this.A) / this.C) * this.degreeConversion);
    this.theta3 = 180 - (this.theta1 + this.theta2);
  }

  scen3Cos() {
    this.A = (Math.sqrt( (this.B * this.B + this.C * this.C) + ((-2) *
    this.B * this.C * Math.cos(this.theta3 * this.radConversion))));
    this.theta2 = (Math.asin((Math.sin(this.theta3 * this.radConversion) * this.C) / this.B) * this.degreeConversion);
    this.theta1 = 180 - (this.theta3 + this.theta2);
  }

  scen1Sin() {
    this.theta3 = 180 - (this.theta1 + this.theta2);
    this.A = (this.B * Math.sin(this.theta3 * this.radConversion)) / Math.sin(this.theta2 * this.radConversion);
    this.C = (this.B * Math.sin(this.theta1 * this.radConversion)) / Math.sin(this.theta2 * this.radConversion);
  }

  scen2Sin() {
    this.theta3 = 180 - (this.theta1 + this.theta2);
    this.B = (this.C * Math.sin(this.theta2 * this.radConversion)) / Math.sin(this.theta1 * this.radConversion);
    this.A = (this.C * Math.sin(this.theta3 * this.radConversion)) / Math.sin(this.theta1 * this.radConversion);
  }

  scen3Sin() {
    this.theta1 = 180 - (this.theta3 + this.theta2);
    this.B = (this.A * Math.sin(this.theta2 * this.radConversion)) / Math.sin(this.theta3 * this.radConversion);
    this.C = (this.A * Math.sin(this.theta1 * this.radConversion)) / Math.sin(this.theta3 * this.radConversion);
  }
  scen4Sin() {
    this.theta1 = 180 - (this.theta3 + this.theta2);

  }

  scen5Sin() {
  }

  scen6Sin() {
  }

  checkAngleRule() {
    if ((this.theta1 + this.theta2) > 180 || (this.theta1 + this.theta3) > 180 || (this.theta2 + this.theta3) > 180) {
      alert('Sum of interior angles is greater than 180 degrees');
      this.clear();
      this.anglesOver180 = true;
    } else {
      this.findInput();
    }
  }
}
