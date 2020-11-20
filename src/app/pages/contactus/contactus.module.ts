import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactHeroComponent } from './sections/contact-hero/contact-hero.component';
import { ContactTodayComponent } from './sections/contact-today/contact-today.component';
import { ContactusComponent } from './contactus.component';


@NgModule({
  declarations: [ContactusComponent, ContactHeroComponent, ContactTodayComponent],
  imports: [
    CommonModule,
    ContactusRoutingModule
  ]
})
export class ContactusModule { }
