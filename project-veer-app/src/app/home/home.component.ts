import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCircleEquation() {
    this.router.navigate(['/tools/circle-equation']);
  }
  goToPTableTool() {
    this.router.navigate(['/tools/periodic-table']);
    console.log('To Be Done');
  }

}
