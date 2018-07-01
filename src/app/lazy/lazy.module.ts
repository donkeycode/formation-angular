import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurtleComponent } from './turtle/turtle.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '', component: TurtleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes,
    )
  ],
  declarations: [TurtleComponent]
})
export class LazyModule { }
