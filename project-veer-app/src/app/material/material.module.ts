import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatTabsModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule
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
