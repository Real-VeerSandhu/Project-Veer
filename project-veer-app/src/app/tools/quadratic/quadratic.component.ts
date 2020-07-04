import { Component, OnInit, ViewChild } from '@angular/core';
// import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-quadratic',
  templateUrl: './quadratic.component.html',
  styleUrls: ['./quadratic.component.css']
})
export class QuadraticComponent implements OnInit {

  // @ViewChild('gridComp', {static: true})

  url = 'https://www.desmos.com/api/v1.5/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';

  loadAPI: Promise<any>;


  constructor() { }

  ngOnInit() {
    this.loadAPI = new Promise((resolve) => {
      console.log('resolving promise...');
      this.loadScript();
    });
    this.loadScript();
  }
  public loadScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = this.url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
