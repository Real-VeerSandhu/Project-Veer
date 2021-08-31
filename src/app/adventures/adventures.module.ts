import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventuresComponent } from './adventures.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentModule } from '../components/component.module';
import { MaterialModule } from '../material/material.module';


const routes: Routes =  [
  { path: '', component: AdventuresComponent }
]

@NgModule({
  declarations: [AdventuresComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentModule,
    MaterialModule
  ]
})
export class AdventuresModule { }