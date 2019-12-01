import { Component, OnInit } from '@angular/core';
import { pTableData } from 'src/models/pTableData';
import { MatDialog } from '@angular/material';
import { ElementDetailsComponent } from '../element-details/element-details.component';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {

  periodicTable: any;

  constructor(public dialog: MatDialog) { }

  openInfo(i: number) {
    console.log(i);
    this.dialog.open(ElementDetailsComponent, {data: {index: i}});
    
  }

  ngOnInit() {
    console.log(pTableData())
    this.periodicTable = pTableData();
    console.log(this.periodicTable.elements[1].xpos)
  }

}
