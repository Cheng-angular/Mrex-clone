import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutCareersRoutingModule } from './about-careers-routing.module';
import { CareerHeroComponent } from './sections/career-hero/career-hero.component';
import { AboutCareersComponent } from './about-careers.component';


@NgModule({
  declarations: [AboutCareersComponent, CareerHeroComponent],
  imports: [
    CommonModule,
    AboutCareersRoutingModule
  ]
})
export class AboutCareersModule { }
