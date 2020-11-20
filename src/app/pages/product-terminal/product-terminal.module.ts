import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductTerminalRoutingModule } from './product-terminal-routing.module';
import { TermHeroSectionComponent } from './term-hero-section/term-hero-section.component';
import { TermMainSectionComponent } from './term-main-section/term-main-section.component';
import { TermDarkSectionComponent } from './term-dark-section/term-dark-section.component';
import { TermWideSectionComponent } from './term-wide-section/term-wide-section.component';
import { TermZeroSectionComponent } from './term-zero-section/term-zero-section.component';
import { TermTodaySectionComponent } from './term-today-section/term-today-section.component';
import { ProductTerminalComponent } from './product-terminal.component';


@NgModule({
  declarations: [
    ProductTerminalComponent, 
    TermHeroSectionComponent, 
    TermMainSectionComponent, 
    TermDarkSectionComponent, 
    TermWideSectionComponent, 
    TermZeroSectionComponent, 
    TermTodaySectionComponent
  ],
  imports: [
    CommonModule,
    ProductTerminalRoutingModule
  ]
})
export class ProductTerminalModule { }
