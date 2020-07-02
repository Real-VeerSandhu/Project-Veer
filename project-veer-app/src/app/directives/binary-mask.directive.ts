import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ngModel][binaryMask]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '(ngModelChange)': 'onInputChange($event)'
  },
})
export class BinaryMaskDirective {

  constructor(public model: NgControl) { }

  onInputChange(e: number) {
    let x: RegExpMatchArray;
    const inputString = `${e}`;
    const rgx = /(^[0-1]{1,20}$)/;
    const matchedString = inputString.match(rgx);
    if (matchedString === null) {
      this.model.valueAccessor.writeValue(null);
      alert('Invalid Input');
    } else {
      this.model.valueAccessor.writeValue(e);
    }
  }
}


// constructor(public model: NgControl) { }

//   onInputChange(value: string) {
//     if (typeof value === 'string') {
//       let x: RegExpMatchArray;
//       const rgx = /(\d{0,3})(\d{0,3})(\d{0,4})/;
//       if (value.charAt(0) === '+' && value.charAt(1) === '1') {
//         const u = value.substr(2);
//         x = u.replace(/\D/g, '').match(rgx);
//         value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
//         value = '+1' + value;
//       } else if (value.charAt(0) === '1') {
//         const u = value.substr(1);
//         x = u.replace(/\D/g, '').match(rgx);
//         value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
//         value = +'1' + value;
//       } else {
//         x = value.replace(/\D/g, '').match(rgx);
//         value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
//       }
//       // console.log('PhoneMask', x);
//       this.model.valueAccessor.writeValue(value);
//     }
