import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatTabsModule,
  MatDialogModule, MatDividerModule, MatListModule, MatIconModule,  } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion'
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatRadioModule} from '@angular/material/radio';




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
  MatRadioModule
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
