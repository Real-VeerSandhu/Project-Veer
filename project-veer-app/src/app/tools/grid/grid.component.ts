import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, AfterViewInit {

  public width = 750;
  public height = 750;
  gridScale = 25;
  @Input()
  pointX: number;
  @Input()
  pointY: number;

  @ViewChild('canvas', { static: false }) public canvas: ElementRef;
  @ViewChild('rad', { static: false }) public rad: ElementRef;
  @ViewChild('rad1', { static: false }) public rad1: ElementRef;
  @ViewChild('hCtrl', { static: false }) public hCtrl: ElementRef;
  @ViewChild('kCtrl', { static: false }) public kCtrl: ElementRef;

  private cx: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
  }

  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    this.cx.lineWidth = 2;
    this.createGrid();
    this.cx.beginPath();
    this.cx.moveTo(375, 0);
    this.cx.lineTo(375, this.height);
    this.cx.strokeStyle = 'black';
    this.cx.stroke();
    this.cx.closePath();
    this.cx.beginPath();
    this.cx.moveTo(0, 375);
    this.cx.lineTo(this.width, 375);
    this.cx.strokeStyle = 'black';
    this.cx.stroke();
    this.plotPoint();
  }
  createGrid() {
    this.drawXGrid();
    this.drawYGrid();
    this.drawNumbers();
  }

  drawXGrid() {
    for (let i = 1; i < 30; i++) {
      const element = 30[i];
      this.cx.lineWidth = 2;
      this.cx.beginPath();
      this.cx.moveTo(0, this.height * i / 30);
      this.cx.lineTo(this.width, this.height * i / 30);
      this.cx.stroke();
    }
  }
  drawYGrid() {
    for (let i = 1; i < 30; i++) {
      const element = 30[i];
      this.cx.beginPath();
      this.cx.moveTo(this.width * i / 30, 0);
      this.cx.lineTo(this.width * i / 30, this.height);
      this.cx.stroke();
    }
  }
  drawNumbers() {
    console.log('from drawNumbers()')
  }
  plotPoint() {
    console.log(this.pointX, this.pointY);
    this.cx.beginPath();
    this.cx.arc(this.pointX * this.gridScale, this.pointY * this.gridScale, 5, 0, 2 * Math.PI, true);
    this.cx.fillStyle = 'rgb(234, 0, 255)';
    this.cx.fill();
    this.cx.strokeStyle = 'rgb(234, 0, 255)';
    this.cx.stroke();
  }
}
