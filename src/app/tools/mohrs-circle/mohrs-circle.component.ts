import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mohrs-circle',
  templateUrl: './mohrs-circle.component.html',
  styleUrls: ['./mohrs-circle.component.css']
})
export class MohrsCircleComponent implements OnInit {

  // sigmaX: number;
  // sigmaY: number;
  // tauXY: number;
  // theta: number;

  sigmaX = 100;
  sigmaY = 22;
  tauXY= 30;
  theta = 28;

  radConversion = Math.PI / 180;

  sigma1: number;
  sigma2: number;
  tauMax: number;
  tauMin: number;
  
  rotatedStressX: number;
  rotatedStressY: number;
  rotatedStressShear: number;

  factor: number;

  /** Maximumm Diameter Point */
  canvasSigma1: number;

  /** Minimum Diameter Point */
  canvasSigma2: number;
  centerPoint: number;
  canvasCenter: number;
  canvasTauMax: number;
  canvasTauMin: number;

  public width = 600;
  public height = 600;

  @ViewChild('canvas', { static: false }) public canvas: ElementRef;

  private cx: CanvasRenderingContext2D;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');

    
    canvasEl.width = this.width;
    canvasEl.height = this.height;
    this.cx.lineWidth = 2;
    this.cx.lineCap = 'square';
    this.cx.strokeStyle = 'grey'
    this.makeGrid();
    setTimeout(() => { 
      this.calculate();
     }, 100);
    
  }

  calculate() {
    this.cx.clearRect(0, 0, this.width, this.height);
    this.makeGrid();
    console.log(this.sigmaX, this.sigmaY, this.tauXY, this.theta);
    // this.sigma1 = ((this.sigmaX + this.sigmaY)/2) + Math.sqrt(  Math.pow(((this.sigmaX-this.sigmaY)/2),2) + Math.pow(this.tauXY,2)   )
    // this.sigma2 = ((this.sigmaX + this.sigmaY)/2) - Math.sqrt(  Math.pow(((this.sigmaX-this.sigmaY)/2),2) + Math.pow(this.tauXY,2)   )
    this.sigma1 = this._prinFn1(this.sigmaX, this.sigmaY) + this._prinFn2(this.sigmaX, this.sigmaY, this.tauXY);
    this.sigma2 = this._prinFn1(this.sigmaX, this.sigmaY) - this._prinFn2(this.sigmaX, this.sigmaY, this.tauXY);
    
    this.tauMax = (this.sigma1 - this.sigma2)/2;
    this.tauMin = this.tauMax*(-1);

    this.rotatedStressX = this._prinFn1(this.sigmaX, this.sigmaY) + this._rotatedHelperFn() + this.tauXY*Math.sin(2*this.theta*this.radConversion);
    this.rotatedStressY = this._prinFn1(this.sigmaX, this.sigmaY) - this._rotatedHelperFn() - this.tauXY*Math.sin(2*this.theta*this.radConversion);
    this.rotatedStressShear = this._rotatedHelperShearFn()*(-1) + this.tauXY*Math.cos(2*this.theta*this.radConversion);
    console.log('Sigma finals', this.sigma1, this.sigma2);
    
    this.findScale();
    this.centerPoint =  (this.sigma1+this.sigma2)/2;

    this.drawCircle(300 + (this.centerPoint)*this.factor, this.tauMax*this.factor);
    this.addLabels();
  }

  private _prinFn1(sX, sY): number {
    return (sX + sY)/2;
  }

  private _prinFn2(sX, sY, tXY) {
    return Math.sqrt(  Math.pow(((sX-sY)/2),2) + Math.pow(tXY,2)   );
  }

  private _rotatedHelperFn() {
    return (this.sigmaX - this.sigmaY)/2*Math.cos(2*this.theta*this.radConversion);
  }

  private _rotatedHelperShearFn() {
    return (this.sigmaX - this.sigmaY)/2*Math.sin(2*this.theta*this.radConversion);
  }

  findScale() {
    if (Math.abs(this.sigma1) >= Math.abs(this.sigma2)){
      this.factor = 270 / Math.abs(this.sigma1);
    } else {
      this.factor = 270 / Math.abs(this.sigma2);
    }
  }

  addLabels() {
    this.cx.fillStyle = "rgb(234, 0, 255)";

    this.canvasSigma1 = 300+this.sigma1*this.factor;
    this.canvasSigma2 = 300+this.sigma2*this.factor;

    this.canvasCenter = this.centerPoint*this.factor+300;

    this.canvasTauMax = 300-(this.tauMax*this.factor);
    this.canvasTauMin = (-1)*(this.tauMin*this.factor-300);

    this.cx.font = "bold 12px Helvetica, Arial, sans-serif"; // Start 
    this.cx.fillText(`${Math.round(this.sigma1*100)/100}`,this.canvasSigma1,290); // Pink
    this.cx.fillText(`${Math.round(this.sigma2*100)/100}`,this.canvasSigma2-28,290);
    this.cx.beginPath();
    this.cx.arc(this.canvasSigma1,300, 5, 0, Math.PI * 2); 
    this.cx.arc(this.canvasSigma2,300, 5, 0, Math.PI * 2);
    this.cx.fill();
    this.cx.closePath(); // End

    this.cx.fillStyle = "rgb(255, 0, 0)"; // Start
    this.cx.beginPath();
    this.cx.arc(this.canvasCenter,300,5,0,Math.PI*2)
    this.cx.fill();
    this.cx.closePath(); // End

    this.cx.fillStyle = "rgb(0, 150, 35)"; // Start
    this.cx.beginPath();
    this.cx.arc(this.canvasCenter,this.canvasTauMax,5,0,Math.PI*2);
    this.cx.arc(this.canvasCenter,this.canvasTauMin,5,0,Math.PI*2);
    this.cx.fillText(`${Math.round(this.tauMax*100)/100}`,this.canvasCenter-15 ,this.canvasTauMax-10);
    this.cx.fillText(`${Math.round(this.tauMin*100)/100}`,this.canvasCenter-15,this.canvasTauMin+20);
    this.cx.fill();
    this.cx.closePath(); // End

    this.cx.strokeStyle = "rgb(0, 141, 212)"; // Start Blue
    this.cx.beginPath();
    this.cx.moveTo(this.rotatedStressX*this.factor+300, (this.rotatedStressShear)*this.factor+300);
    // let blueLineX = this.rotatedStressX*this.factor+300;
    let blueLineY = (this.rotatedStressShear)*this.factor+300;
    this.cx.lineTo(this.rotatedStressY*this.factor+300, (-1)*(this.rotatedStressShear*this.factor-300)); 
    this.cx.stroke();
    this.cx.closePath(); // End

    this.cx.fillStyle = "rgb(0, 141, 212)";// Start
    this.cx.beginPath();
    
    this.cx.arc(   this.rotatedStressX*this.factor+300, (this.rotatedStressShear)*this.factor+300,5,0,Math.PI*2);
    this.cx.arc(this.rotatedStressY*this.factor+300, (-1)*(this.rotatedStressShear*this.factor-300),5,0,Math.PI*2);

    this.cx.fill();
    this.cx.closePath(); // End

    this.cx.strokeStyle = "rgb(0, 0, 0)"; // Start
    this.cx.beginPath();
    this.cx.moveTo(this.sigmaY*this.factor+300, 300-(this.tauXY*this.factor));
    this.cx.lineTo(this.sigmaX*this.factor+300, 300+(this.tauXY*this.factor));
    this.cx.stroke();
    this.cx.closePath(); // End

    this.cx.fillStyle = "rgb(0, 0, 0)"; // Start
    this.cx.beginPath();
    this.cx.arc(this.sigmaY*this.factor+300, 300-(this.tauXY*this.factor),5,0,Math.PI*2);
    this.cx.arc(this.sigmaX*this.factor+300, 300+(this.tauXY*this.factor),5,0,Math.PI*2);
    let blackLineX = this.sigmaX*this.factor+300;
    let blackLineY = 300+(this.tauXY*this.factor);

    let averageX = (blackLineX + this.canvasCenter)/2;
    let averageY = (blackLineY + blueLineY)/2;

    console.log('averages', averageX, averageY)

    this.cx.font = "bold 12px Helvetica, Arial, sans-serif"; 
    // this.cx.fillText("2θ°",this.canvasCenter+10 ,295);
    this.cx.fillText("2θ°",averageX,averageY);
    this.cx.fill();
    this.cx.closePath(); // End
  }

  clear() {
    this.sigmaX = null;
    this.sigmaY = null;
    this.tauXY = null;
    this.theta = null;

    this.sigma1 = null;
    this.sigma2 = null;

    this.tauMax = null;
    this.tauMin = null;

    this.rotatedStressX = null;
    this.rotatedStressY = null;
    this.rotatedStressShear = null;
    this.cx.clearRect(0, 0, this.width, this.height);
    this.makeGrid();
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
  makeGrid(){
    this.cx.lineWidth = 2;
    this.cx.lineCap = 'square';
    this.cx.strokeStyle = 'grey'
    this.drawXGrid();
    this.drawYGrid();

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

    this.cx.font = "bold 20px Helvetica, Arial, sans-serif";
    this.cx.fillText("𝜏",310,20);
    this.cx.fillText("σ", 580, 315);
  }
  drawCircle(xPos,r) {
    this.cx.beginPath();
    this.cx.arc(xPos, this.height/2, r, 0, 2 * Math.PI);
    this.cx.stroke();
  }
}
