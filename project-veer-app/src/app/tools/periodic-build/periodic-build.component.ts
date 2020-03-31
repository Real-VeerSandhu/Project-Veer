import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ElementSummary } from 'src/models/periodic-table-element';
import { countBy } from 'lodash';

@Component({
  selector: 'app-periodic-build',
  templateUrl: './periodic-build.component.html',
  styleUrls: ['./periodic-build.component.css']
})
export class PeriodicBuildComponent implements OnInit, OnChanges {
  @Input() clickedElements: string[];
  @Input() elements: ElementSummary[];

  elementSymbols = [];

  constructor() { }

  ngOnInit() {
    console.log('Elements from child: ', this.elements);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.elementFinder();
  }
  elementFinder() {
    const sortedClickedElements = countBy(this.clickedElements);
    console.log(sortedClickedElements);
  }
  elementCompiler() {
    let i = 0;
    for (i = 0; i < this.elements.length; i++) {
      this.elementSymbols.push(this.elements[i].symbol);
    }
    for (i = 0; i < this.elementSymbols.length; i++) {
      const orderedClickedElements = this.clickedElements.filter(element => element === this.elementSymbols[i]);
      console.log('ORDERED LIST: ', this.elementSymbols[i], orderedClickedElements.length);
      console.log(this.elementSymbols);
    }
  }
}


