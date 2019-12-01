import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { pTableData } from 'src/models/pTableData';

@Component({
  selector: 'app-element-details',
  templateUrl: './element-details.component.html',
  styleUrls: ['./element-details.component.css']
})
export class ElementDetailsComponent implements OnInit {

  periodicTable: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {index: number}) { }

  ngOnInit() {
    this.periodicTable = pTableData();
  }

}
