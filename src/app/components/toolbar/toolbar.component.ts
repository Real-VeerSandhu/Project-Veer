import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  showFiller = false;

  ngOnInit() {
  }

  goToTools() {
    this.router.navigate(['/tools']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToAdventures() {
    this.router.navigate(['/adventures']);
    console.log('adventures fired');
  }
}