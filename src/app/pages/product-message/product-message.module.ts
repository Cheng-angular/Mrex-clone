import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductMessageRoutingModule } from './product-message-routing.module';
import { ProductMessageComponent } from './product-message.component';
import { MessageHeroComponent } from './sections/message-hero/message-hero.component';
import { MessageDarkComponent } from './sections/message-dark/message-dark.component';
import { MessageWideComponent } from './sections/message-wide/message-wide.component';
import { MessagewMobileComponent } from './sections/messagew-mobile/messagew-mobile.component';
import { MessageTodayComponent } from './sections/message-today/message-today.component';


@NgModule({
  declarations: [ProductMessageComponent, MessageHeroComponent, MessageDarkComponent, MessageWideComponent, MessagewMobileComponent, MessageTodayComponent],
  imports: [
    CommonModule,
    ProductMessageRoutingModule
  ]
})
export class ProductMessageModule { }
