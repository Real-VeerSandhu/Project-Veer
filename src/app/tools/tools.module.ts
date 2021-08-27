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
import { PeriodicTableService } from 'src/services/periodic-table.service';
import { FirestoreService } from 'src/services/firestore.service';
import { GridComponent } from './grid/grid.component';
import { QuadraticComponent } from './quadratic/quadratic.component';
import { PeriodicBuildComponent } from './periodic-build/periodic-build.component';
import { ConfigureElementComponent } from './configure-element/configure-element.component';
import { BinaryHexConverterComponent } from './binary-hex-converter/binary-hex-converter.component';
import { DirectiveModule } from '../directives/directive.module';
import { TrigComponent } from './trig/trig.component';
import { MohrsCircleComponent } from './mohrs-circle/mohrs-circle.component';


const routes: Routes =  [
  { path: '', component: ToolsComponent },
  { path: 'circle-equation', component: CircleEquationComponent},
  { path: 'periodic-table', component: PeriodicTableComponent},
  { path: 'parabola', component: QuadraticComponent },
  { path: 'binary-hex-converter', component: BinaryHexConverterComponent },
  { path: 'trigonometry', component: TrigComponent },
  { path: 'mohrs-circle', component: MohrsCircleComponent}

];

@NgModule({
  declarations: [ToolsComponent, CircleEquationComponent,
    PeriodicTableComponent, ElementDetailsComponent,
    GridComponent, QuadraticComponent, PeriodicBuildComponent, ConfigureElementComponent, BinaryHexConverterComponent, TrigComponent, MohrsCircleComponent],
  entryComponents: [ElementDetailsComponent, ConfigureElementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentModule,
    MaterialModule,
    FormsModule,
    DirectiveModule
  ],
  providers: [
    PeriodicTableService,
    FirestoreService
  ]
})
export class ToolsModule { }
