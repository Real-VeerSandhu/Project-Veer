import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ElementDetailsComponent } from '../element-details/element-details.component';
import { ElementSummary } from 'src/models/periodic-table-element';
import { PeriodicTableService } from 'src/services/periodic-table.service';
import { Observable, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { ConfigureElementComponent } from '../configure-element/configure-element.component';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css'],
})

export class PeriodicTableComponent implements OnInit, OnDestroy {
  
  periodicTable: any;
  ed: { [key: string]: {} }; // Element dictionary
  pTable: { [key: string]: ElementSummary };
  dbPeriodicTable$: Observable<any>;
  elementSummaryArray: ElementSummary[] = [];
  sub: Subscription;
  subDetails: Subscription;
  buildMode = false;
  elementsClickedArray = [];
  mode: string;


  constructor(public dialog: MatDialog, private pts: PeriodicTableService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    // console.log(pTableData());
    // // this.periodicTable = pTableData();
    // // console.log(this.periodicTable.elements[1].xpos);
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
          // console.log('ele', ele);
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
    });
  }
  ngOnDestroy() {
    if (!!this.sub) {
      this.sub.unsubscribe();
    }
    if (!!this.subDetails) {
      this.subDetails.unsubscribe();
    }
  }
  elementClicked(symbol: string) {
    if (!this.buildMode) {
      this.openInfo(symbol);
    } else {
      this.builder(symbol);
    }
  }
  openInfo(symbol: string) {
    this.subDetails = this.pts.getElementBySymbol(symbol).subscribe(r => {
      console.log('r', r);
      const details = r[0];
      console.log(details);
      this.dialog.open(ElementDetailsComponent, { data: details });
    });
  }
  onChange(event) {
    this.mode = '';
    console.log('CHANGED');
    console.log('buildMode status: ', this.buildMode);
    console.log('event is ', event);
    if (this.buildMode === false) {
      this.mode = 'Explore Mode';
    } else {
      this.mode = 'Build Mode';
    }
    this.snackBar.open(this.mode, '', {
      duration: 1000
    });

  }
  builder(symbol: string) {
    this.elementsClickedArray.push(symbol);
    this.elementsClickedArray = this.elementsClickedArray.slice();
  }
  /** Opens configure element component via dialog */
  configElement() {
    this.dialog.open(ConfigureElementComponent, {
      width: '500px',
      height: '500px'
    });
  }
}

