import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutInvestorRoutingModule } from './about-investor-routing.module';
import { AboutInvestorComponent } from './about-investor.component';


@NgModule({
  declarations: [ AboutInvestorComponent ],
  imports: [
    CommonModule,
    AboutInvestorRoutingModule
  ]
})
export class AboutInvestorModule { }
