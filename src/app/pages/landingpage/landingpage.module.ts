import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LandingpageRoutingModule } from './landingpage-routing.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MaintradeSectionComponent } from './maintrade-section/maintrade-section.component';
import { MainterminalSectionComponent } from './mainterminal-section/mainterminal-section.component';
import { MobileSectionComponent } from './mobile-section/mobile-section.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { IconSectionComponent } from './icon-section/icon-section.component';
import { LandingpageComponent } from './landingpage.component';
import { MainTodayComponent } from './main-today/main-today.component';


@NgModule({
  declarations: [ 
    LandingpageComponent, 
    HeroSectionComponent, 
    MaintradeSectionComponent, 
    MainterminalSectionComponent, 
    MobileSectionComponent, 
    MessageSectionComponent, 
    AboutSectionComponent, 
    IconSectionComponent, 
    MainTodayComponent
  ],
  imports: [
    CommonModule,
    LandingpageRoutingModule
  ],
  exports: [
    TranslateModule
  ],
})
export class LandingpageModule { }
