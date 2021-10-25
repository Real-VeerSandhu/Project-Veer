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

  goToTools() {
    this.router.navigate(['/tools']);
  }
  goToAdventures() {
    this.router.navigate(['/adventures']);
  }
  goToTable() {
    this.router.navigate(['/tools/periodic-table']);
  }

  github() {
    window.open('https://github.com/Real-VeerSandhu');
  }
  youtube() {
    window.open('https://www.youtube.com/channel/UCZpL_cCZfkilh7ITC_qUigw');
  }
  devpost() {
    window.open('https://devpost.com/Real-VeerSandhu?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav');
  }
  linkedin() {
    window.open('https://www.linkedin.com/in/veer-sandhu');
  }
}
