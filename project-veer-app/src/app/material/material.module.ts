import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule
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
