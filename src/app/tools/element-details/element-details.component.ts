import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PeriodicTableService } from 'src/services/periodic-table.service';
import { PeriodicTableElement } from 'src/models/periodic-table-element';

@Component({
  selector: 'app-element-details',
  templateUrl: './element-details.component.html',
  styleUrls: ['./element-details.component.css']
})
export class ElementDetailsComponent implements OnInit {

  periodicTable: any;
  elementDetail: PeriodicTableElement;

  constructor(@Inject(MAT_DIALOG_DATA) public data: PeriodicTableElement, private pts: PeriodicTableService) { }

  ngOnInit() {
    // this.periodicTable = pTableData();
    // console.log(this.data.symbol);
    // this.pts.getElementBySymbol(this.data.symbol).subscribe(r => {
    //   console.log('r', r);
    //   this.elementDetail = r[0];
    //   console.log(this.elementDetail);
    // });
  }
}
