import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransServiceModule } from 'src/app/trans-service/trans-service.module';
import { AboutCareersRoutingModule } from './about-careers-routing.module';
import { CareerHeroComponent } from './sections/career-hero/career-hero.component';
import { AboutCareersComponent } from './about-careers.component';


@NgModule({
  declarations: [AboutCareersComponent, CareerHeroComponent],
  imports: [
    CommonModule,
    AboutCareersRoutingModule,
    TransServiceModule
  ]
})
export class AboutCareersModule { }
