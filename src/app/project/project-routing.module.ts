import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsProyectComponent } from './details-proyect/details-proyect.component';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'details',
  component: DetailsProyectComponent
},
{ path: "", redirectTo: "dashboard", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
