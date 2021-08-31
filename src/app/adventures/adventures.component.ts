import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.css']
})
export class AdventuresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToAirline() {
    console.log("N/A")
  }
}