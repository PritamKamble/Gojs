import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraggableComponent } from './draggable/draggable.component';
import { MinimalComponent } from './minimal/minimal.component';


const routes: Routes = [
  { path: '', redirectTo: 'minimal', pathMatch: 'full' },
  {
    path: 'draggable',
    component: DraggableComponent,
  },
  {
    path: 'minimal',
    component: MinimalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
