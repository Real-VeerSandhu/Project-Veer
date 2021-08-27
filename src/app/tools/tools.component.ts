import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCircleEquation() {
    this.router.navigate(['/tools/circle-equation']);
  }
  goToPTableTools() {
    this.router.navigate(['/tools/periodic-table']);
  }
  goToLinerSystemTool() {
    this.router.navigate(['/tools/linear-system']);
  }
  goToParabolaTool() {
    alert('In Production...')
    // this.router.navigate(['/tools/parabola']);
  }
  goToBinaryHexTool() {
    this.router.navigate(['/tools/binary-hex-converter']);
  }
  goToTrigTool() {
    this.router.navigate(['/tools/trigonometry']);
  }
  goToMohrs() {
    this.router.navigate(['/tools/mohrs-circle']);
  }
}
