import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  entryComponents:[ToolbarComponent],
  exports: [
    ToolbarComponent
  ]
})
export class ComponentModule { 
  static forRoot() {
    return {
      NgModule: ComponentModule
    }
  }
}