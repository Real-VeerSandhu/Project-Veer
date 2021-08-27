import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatTabChangeEvent } from '@angular/material';


@Component({
  selector: 'app-circle-equation',
  templateUrl: './circle-equation.component.html',
  styleUrls: ['./circle-equation.component.css']
})
export class CircleEquationComponent implements OnInit, AfterViewInit {

  public width = 600;
  public height = 600;
  public originPointX = 300;
  public originPointY = 300;
  public h = 0;
  public k = 0;


  @ViewChild('canvas', { static: false }) public canvas: ElementRef;
  @ViewChild('rad', { static: false }) public rad: ElementRef;
  @ViewChild('rad1', { static: false }) public rad1: ElementRef;
  @ViewChild('hCtrl', { static: false }) public hCtrl: ElementRef;
  @ViewChild('kCtrl', { static: false }) public kCtrl: ElementRef;



  @Output()
  selectedTabChange: EventEmitter<MatTabChangeEvent>;

  private cx: CanvasRenderingContext2D;

  radius: number;
  randomPoint: number;
  otherPoint: number;


  constructor() { }

  ngOnInit() {
  }

  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');

    canvasEl.width = this.width;
    canvasEl.height = this.height;


    this.cx.lineWidth = 2;
    this.cx.lineCap = 'square';
    this.cx.strokeStyle = 'grey';
    this.drawYGrid();
    this.drawXGrid();
    this.cx.beginPath();
    this.cx.moveTo(300, 0);
    this.cx.lineTo(300, this.height);
    this.cx.strokeStyle = 'black';
    this.cx.stroke();
    this.cx.closePath();
    this.cx.beginPath();
    this.cx.moveTo(0, 300);
    this.cx.lineTo(this.width, 300);
    this.cx.strokeStyle = 'black';
    this.cx.stroke();
  }

  createGeo() {
    this.cx.clearRect(0, 0, this.width, this.height);
    this.cx.strokeStyle = 'grey';
    this.drawYGrid();
    this.drawXGrid();
    this.cx.strokeStyle = 'black';
    this.drawCircle();
    this.cx.beginPath();
    this.cx.moveTo(300, 0);
    this.cx.lineTo(300, this.height);
    this.cx.strokeStyle = 'black';
    this.cx.stroke();
    this.cx.closePath();
    this.cx.beginPath();
    this.cx.moveTo(0, 300);
    this.cx.lineTo(this.width, 300);
    this.cx.strokeStyle = 'black';
    this.cx.stroke();
    console.log('H: ', this.k, 'K: ', this.k);
  }

  drawYGrid() {
    for (let i = 1; i < 20; i++) {
      const element = 20[i];
      this.cx.beginPath();
      this.cx.moveTo(this.width * i / 20, 0);
      this.cx.lineTo(this.width * i / 20, this.height);
      this.cx.stroke();
    }
  }
  drawXGrid() {
    for (let i = 1; i < 20; i++) {
      const element = 20[i];
      this.cx.beginPath();
      this.cx.moveTo(0, this.height * i / 20);
      this.cx.lineTo(this.width, this.height * i / 20);
      this.cx.stroke();
    }
  }
  radiusValue(event: KeyboardEvent) { // with type info
    this.radius = +(event.target as HTMLInputElement).value;
    if (this.radius > 10) {
      this.radius = 10;
    }
    this.radius = this.radius * 30;
  }
  drawCircle() {
    this.cx.beginPath();
    this.cx.arc(300 + this.h, 300 + this.k, this.radius, 0, Math.PI * 2, true);
    this.cx.strokeStyle = 'black';
    this.cx.stroke();
    this.cx.closePath();
  }
  drawPoint() {
    // tslint:disable-next-line: prefer-const
    let otherPoint: number;
    const q = 30;
    let multiplyMe: number;
    this.randomPoint = Math.random() * this.radius / 30 * 2 - this.radius / 30;

    this.otherPoint = Math.sqrt(this.radius * this.radius / 900 - this.randomPoint * this.randomPoint);
    console.log('random', this.randomPoint, 'other', this.otherPoint);

    if (Math.floor(Math.random() * 2) === 0) {
      multiplyMe = 1;
    } else {
      multiplyMe = -1;
    }
    console.log(multiplyMe);

    this.otherPoint = this.otherPoint * multiplyMe + (this.k / 60 / 30);
    this.randomPoint = this.randomPoint * multiplyMe + (this.h / 60 / 30);


    this.cx.beginPath();
    this.cx.arc(this.randomPoint * 30 + 300 + this.h, this.otherPoint * 30 + 300 + this.k, 6, 0, Math.PI * 2, true);
    this.cx.fillStyle = 'rgb(234, 0, 255)';
    this.cx.fill();
    this.cx.closePath();
  }
  hValue(event: KeyboardEvent) { // with type info
    this.h = +(event.target as HTMLInputElement).value;
    this.h = this.h * 30;
  }
  kValue(event: KeyboardEvent) { // with type info
    this.k = +(event.target as HTMLInputElement).value;
    this.k = this.k * 30 * -1;
  }
  clearCircle(e) {
    this.k = 0;
    this.h = 0;
    this.radius = 0;
    this.rad.nativeElement.value = null;
    this.rad1.nativeElement.value = null;
    this.hCtrl.nativeElement.value = null;
    this.kCtrl.nativeElement.value = null;
  }
}
