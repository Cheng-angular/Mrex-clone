import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTradelabRoutingModule } from './product-tradelab-routing.module';
import { ProductTradelabComponent } from './product-tradelab.component';
import { TradeHeroComponent } from './sections/trade-hero/trade-hero.component';
import { TradeDarkComponent } from './sections/trade-dark/trade-dark.component';
import { TradewideComponent } from './sections/tradewide/tradewide.component';
import { TradezeroComponent } from './sections/tradezero/tradezero.component';
import { TradeTodayComponent } from './sections/trade-today/trade-today.component';
import { TransServiceModule } from 'src/app/trans-service/trans-service.module';



@NgModule({
  declarations: [ 
    ProductTradelabComponent, 
    TradeHeroComponent, 
    TradeDarkComponent, 
    TradewideComponent, 
    TradezeroComponent, 
    TradeTodayComponent
   ],
  imports: [
    CommonModule,
    ProductTradelabRoutingModule,
    TransServiceModule
  ]
})
export class ProductTradelabModule { }
