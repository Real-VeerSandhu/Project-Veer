import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-hex-converter',
  templateUrl: './binary-hex-converter.component.html',
  styleUrls: ['./binary-hex-converter.component.css']
})
export class BinaryHexConverterComponent implements OnInit {

  binaryValue: number;
  hexValue: any;
  decimalValue: number;
  reverseBinNumber: any;

  constructor() { }

  ngOnInit() {
  }

  findInput() {
    if (this.binaryValue && !this.hexValue && !this.decimalValue) {
      console.log('Binary is a value');
      this.binaryConverter();
    } else if (!this.binaryValue && this.hexValue && !this.decimalValue) {
      console.log('Hex is a value');
      this.hexSolo();
    } else if (!this.binaryValue && !this.hexValue && this.decimalValue) {
      console.log('Decimal is a value');
      this.decimalConverter();
    } else {
      console.error('Invalid Input');
    }
  }

  // findInput() {
  //   this.binaryConverter();
  //   this.hexConverter();
  //   this.decimalConverter();
  // }

  binaryConverter() {
    const stringBinNumber = `${this.binaryValue}`.split('');
    this.reverseBinNumber = stringBinNumber.reverse();
    this.decimalValue = 0;
    for (let i = 0; i < this.reverseBinNumber.length; i++) {
      this.decimalValue = this.decimalValue + (+(this.reverseBinNumber[i]) * Math.pow(2, i));
    }
    this.hexConverter();
  }
  hexConverter() {
    let workNum = this.decimalValue;
    const hexNumbers = [];

    while (workNum >= 1) {
      hexNumbers.push(workNum % 16);
      workNum = Math.floor(workNum / 16);
    }
    // console.log('NUMBERS:', hexNumbers.reverse());
    this.hexString(hexNumbers.reverse());
  }
  hexString(hexNumbers: number[]) {
    let hexString = '';
    hexNumbers.forEach(ele => {
      // console.log('ELEMENTS: ', ele);
      if (ele <= 9) {
        hexString = hexString + ele;
      } else {
        hexString = hexString + String.fromCharCode((ele - 9) + 64);
      }
    });
    // console.log('STRING', hexString);
    this.hexValue = hexString.toLocaleUpperCase();
  }
  hexSolo() {
    const workArr = `${this.hexValue}`.split('').reverse();
    const result = [];
    this.decimalValue = 0;

    workArr.forEach(ele => {
      if (+ele <= 9) {
        result.push(ele);
      } else {
        result.push((ele.charCodeAt(0) - 55).toString());
      }
    });
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
      this.decimalValue = this.decimalValue + (+(result[i]) * Math.pow(16, i));
    }
    this.decimalConverter();
  }


  decimalConverter() {
    this.hexConverter();

    let binString = '';
    let binNumber = [];
    let decValue = this.decimalValue;
    while (decValue >= 1) {
      binNumber.push(decValue % 2);
      decValue = Math.floor(decValue / 2);
    }
    binNumber = binNumber.reverse();
    binNumber.forEach(ele => {
      binString = binString + ele;
    });
    this.binaryValue = +binString;
  }

  clear() {
    this.binaryValue = null;
    this.hexValue = null;
    this.decimalValue = null;
  }
}
