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
    console.log('Tools')
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

  project(value) {
    let links = {
      0: 'https://github.com/Real-VeerSandhu/Object-Detection',
      1: 'https://github.com/Real-VeerSandhu/Article-AI',
      2: 'https://github.com/Real-VeerSandhu/SCIFAA-COVID-19-Project',
      3: 'https://github.com/Real-VeerSandhu/CIFAR-Image-Classification',
      4: 'https://github.com/Real-VeerSandhu/Waste-Classification',
      5: 'https://github.com/getgrowify/ML-App',
      6: 'https://github.com/corex-peddie/machine-learning',
      7: 'https://github.com/Real-VeerSandhu/Spike-Sigma',
    }
  window.open(links[value])
  }
}
