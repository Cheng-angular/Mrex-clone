import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageModule } from './pages/landingpage/landingpage.module';
import { ProductTerminalModule } from './pages/product-terminal/product-terminal.module';
import { ProductTradelabModule } from './pages/product-tradelab/product-tradelab.module';
import { AboutCompanyModule } from './pages/about-company/about-company.module';
import { AboutCareersModule } from './pages/about-careers/about-careers.module';
import { AboutInvestorModule } from './pages/about-investor/about-investor.module';
import { ResearchModule } from './pages/research/research.module';
import { ContactusModule } from './pages/contactus/contactus.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingpageModule,
    ProductTerminalModule,
    ProductTradelabModule,
    AboutCompanyModule,
    AboutCareersModule,
    AboutInvestorModule,
    ResearchModule,
    ContactusModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
