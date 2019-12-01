import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentModule } from '../components/component.module';
import { MaterialModule } from '../material/material.module';
import { CircleEquationComponent } from './circle-equation/circle-equation.component';
import { FormsModule } from '@angular/forms';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { ElementDetailsComponent } from './element-details/element-details.component';


const routes: Routes =  [
  { path: '', component: ToolsComponent },
  { path: 'circle-equation', component: CircleEquationComponent},
  { path: 'periodic-table', component: PeriodicTableComponent}
]

@NgModule({
  declarations: [ToolsComponent, CircleEquationComponent, PeriodicTableComponent, ElementDetailsComponent],
  entryComponents: [ElementDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentModule,
    MaterialModule,
    FormsModule
  ]
})
export class ToolsModule { }
