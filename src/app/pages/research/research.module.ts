import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResearchRoutingModule } from './research-routing.module';
import { ResearchHeroComponent } from './sections/research-hero/research-hero.component';
import { ResearchTodayComponent } from './sections/research-today/research-today.component';
import { ResearchComponent } from './research.component';


@NgModule({
  declarations: [ResearchComponent, ResearchHeroComponent, ResearchTodayComponent],
  imports: [
    CommonModule,
    ResearchRoutingModule
  ]
})
export class ResearchModule { }
