import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutCompanyRoutingModule } from './about-company-routing.module';
import { AboutusOVerviewComponent } from './sections/aboutus-overview/aboutus-overview.component';
import { AboutusTeamComponent } from './sections/aboutus-team/aboutus-team.component';
import { AboutusValuesComponent } from './sections/aboutus-values/aboutus-values.component';
import { AboutusContactsComponent } from './sections/aboutus-contacts/aboutus-contacts.component';
import { AboutusQuestionsComponent } from './sections/aboutus-questions/aboutus-questions.component';
import { AboutCompanyComponent } from './about-company.component';
import { AboutusHeroComponent } from './sections/aboutus-hero/aboutus-hero.component';
import { TransServiceModule } from 'src/app/trans-service/trans-service.module';



@NgModule({
  declarations: [
    AboutCompanyComponent, 
    AboutusOVerviewComponent, 
    AboutusTeamComponent, 
    AboutusValuesComponent, 
    AboutusContactsComponent, 
    AboutusQuestionsComponent, 
    AboutusHeroComponent
  ],
  imports: [
    CommonModule,
    AboutCompanyRoutingModule,
    TransServiceModule
  ]
})
export class AboutCompanyModule { }
