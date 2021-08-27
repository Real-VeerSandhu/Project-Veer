import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeriodicTableService } from 'src/services/periodic-table.service';
import { Subscription } from 'rxjs';
import { PeriodicTableElement } from 'src/models/periodic-table-element';

@Component({
  selector: 'app-configure-element',
  templateUrl: './configure-element.component.html',
  styleUrls: ['./configure-element.component.css']
})
export class ConfigureElementComponent implements OnInit, OnDestroy {

  value = 1;
  sub: Subscription;
  element: PeriodicTableElement;


  constructor(private pts: PeriodicTableService) { }

  ngOnInit() {
    this.getElement();
  }

  getElement() {
    console.log('getElement()', this.value);
    this.sub = this.pts.eleQuery(this.value).subscribe(r => {
      console.log('subscribe function: ', r);
      this.element = r[0];
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
