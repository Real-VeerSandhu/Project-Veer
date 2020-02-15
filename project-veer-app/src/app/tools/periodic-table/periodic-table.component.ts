import { Component, OnInit, OnDestroy } from '@angular/core';
import { pTableData } from 'src/models/pTableData';
import { MatDialog } from '@angular/material';
import { ElementDetailsComponent } from '../element-details/element-details.component';
import { PeriodicTableElement, ElementSummary } from 'src/models/periodic-table-element';
import { PeriodicTableService } from 'src/services/periodic-table.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit, OnDestroy {

  periodicTable: any;
  ed: { [key: string]: {} }; // Element dictionary
  pTable: { [key: string]: ElementSummary };
  dbPeriodicTable$: Observable<any>;
  elementSummaryArray: ElementSummary[] = [];
  sub: Subscription;
  subDetails: Subscription;


  constructor(public dialog: MatDialog, private pts: PeriodicTableService) { }

  openInfo(i: string) {
    this.subDetails = this.pts.getElementBySymbol(i).subscribe(r => {
      console.log('r', r);
      const details = r[0];
      console.log(details);
      this.dialog.open(ElementDetailsComponent, { data: details });
    });
    console.log(i);

  }


  ngOnInit() {
    console.log(pTableData());
    this.periodicTable = pTableData();
    console.log(this.periodicTable.elements[1].xpos);
    // e is an Element of the table
    // const e = new PeriodicTableElement();
    // this.ed = e.convertDictionary();
    // this.pTable = e.getTableView();

    this.dbPeriodicTable$ = this.pts.getPTable();
    this.sub = this.dbPeriodicTable$.subscribe(r => {
      console.log('database', r);
      for (const key in r) {
        if (r.hasOwnProperty(key)) {
          const ele = r[key];
          console.log('ele', ele);
          if (!!ele.name) {
            this.elementSummaryArray.push({
              symbol: key,
              name: ele.name,
              number: ele.number,
              xpos: ele.xpos,
              ypos: ele.ypos
            });
            this.elementSummaryArray.sort((a, b) => a.number - b.number);
          }
        }
      }
      console.log('array: ', this.elementSummaryArray);
    });
  }

  // addElement() {
  //   const hKey = Object.keys(this.ed)[0];
  //   for (const key in this.ed) {
  //     if (this.ed.hasOwnProperty(key)) {
  //       const ele = this.ed[key] as PeriodicTableElement;
  //       this.pts.createElement(ele);
  //     }
  //   }
  // }

  // addTableView() {
  //   this.pts.createPTable(this.pTable);
  // }

  ngOnDestroy() {
    if (!!this.sub) {
      this.sub.unsubscribe();
    }
    if (!!this.subDetails) {
      this.subDetails.unsubscribe();
    }
  }
}

