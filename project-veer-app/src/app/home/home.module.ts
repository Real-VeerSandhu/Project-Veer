import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentModule } from '../components/component.module';

const routes: Routes =  [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentModule
  ],
  exports: [
    
  ]
})
export class HomeModule { }
