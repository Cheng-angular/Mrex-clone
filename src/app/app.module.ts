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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    ContactusModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader, useFactory: httpTranslateLoader, deps:[HttpClient]}
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}