import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutInvestorRoutingModule } from './about-investor-routing.module';
import { AboutInvestorComponent } from './about-investor.component';
import { TransServiceModule } from 'src/app/trans-service/trans-service.module';


@NgModule({
  declarations: [ AboutInvestorComponent ],
  imports: [
    CommonModule,
    AboutInvestorRoutingModule,
    TransServiceModule
  ]
})
export class AboutInvestorModule { }
