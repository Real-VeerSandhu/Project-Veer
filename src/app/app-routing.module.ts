import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule'},
  { path: 'tools', loadChildren: './tools/tools.module#ToolsModule'},
  { path: 'adventures', loadChildren: './adventures/adventures.module#AdventuresModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
