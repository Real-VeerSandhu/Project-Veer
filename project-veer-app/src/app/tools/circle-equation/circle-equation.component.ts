import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { mixinColor } from '@angular/material';
import { randomBytes } from 'crypto';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

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


  @ViewChild('canvas', { static: false }) public canvas: ElementRef;

  private cx: CanvasRenderingContext2D;

  radius: number;

  
  constructor() { }
  
  ngOnInit() {
  }
  
  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    
    canvasEl.width = this.width;
    canvasEl.height = this.height;
    
    
    this.cx.lineWidth = 3;
    this.cx.lineCap = 'square';
    this.cx.strokeStyle = 'rgb(234, 0, 255)';
    this.drawYGrid();
    this.drawXGrid();
  }
  
  createGeo() {
    this.cx.clearRect(0, 0, this.width, this.height);
    this.cx.strokeStyle = 'rgb(234, 0, 255)';
    this.drawYGrid();
    this.drawXGrid();
    this.cx.strokeStyle = 'black';
    this.drawCircle()
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
    this.radius = +(event.target as HTMLInputElement).value
    this.radius = this.radius * 30
  }
  drawCircle() {
    this.cx.beginPath();
    let u = this.cx.arc(300, 300, this.radius, 0, Math.PI * 2, true);
    this.cx.strokeStyle = 'black';
    this.cx.stroke();
    this.cx.closePath();

  }
  drawPoint() {
    let otherPoint: number
    let q = 30
    let multiplyMe: number
    let randomPoint = Math.random()*this.radius/30*2-this.radius/30
    
    otherPoint =  Math.sqrt(this.radius*this.radius/900 - randomPoint*randomPoint)
    console.log('random', randomPoint, 'other', otherPoint)
    
    if(Math.floor(Math.random() * 2) === 0) {
      multiplyMe = -1
    } else {
      multiplyMe = 1
    } console.log(multiplyMe)

    otherPoint = otherPoint*multiplyMe
    
    this.cx.beginPath();
    this.cx.arc(randomPoint*30+300, otherPoint*30+300, 6, 0, Math.PI * 2, true);
    this.cx.fillStyle = 'indigo';
    this.cx.fill();
    this.cx.closePath();

  }
  
  

}
