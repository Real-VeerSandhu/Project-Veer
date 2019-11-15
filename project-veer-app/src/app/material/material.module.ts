import { NgModule } from '@angular/core';
import { MatButtonModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatToolbarModule
]

@NgModule({
 
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
