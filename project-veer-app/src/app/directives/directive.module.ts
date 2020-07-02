import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinaryMaskDirective } from './binary-mask.directive';



@NgModule({
  declarations: [BinaryMaskDirective],
  imports: [
    CommonModule
  ], exports : [
    BinaryMaskDirective
  ]
})
export class DirectiveModule { }
