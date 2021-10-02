import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatTabsModule,
  MatDialogModule, MatDividerModule, MatListModule, MatIconModule, MatMenuModule, MatGridListModule, MatSidenavModule,  } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSliderModule} from '@angular/material/slider';

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatDialogModule,
  MatDividerModule,
  MatListModule,
  MatIconModule,
  MatExpansionModule,
  DragDropModule,
  MatRadioModule,
  MatSnackBarModule,
  MatSliderModule,
  MatMenuModule,
  MatGridListModule,
  MatSidenavModule
];

@NgModule({

  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }