import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag'
import { ButtonModule } from 'primeng/button';
import { DetailsProyectComponent } from './details-proyect/details-proyect.component'

@NgModule({
  declarations: [
    DashboardComponent,
    DetailsProyectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatCardModule,
    CarouselModule,
    TagModule,
    ButtonModule
  ]
})
export class ProjectModule { }
