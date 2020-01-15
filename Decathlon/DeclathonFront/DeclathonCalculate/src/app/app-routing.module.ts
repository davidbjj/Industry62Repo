import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatePointsComponent } from './calculate-points/calculate-points.component';


const routes: Routes = [
  { path: 'declathon', component: CalculatePointsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
