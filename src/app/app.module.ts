import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
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
import { TermConditionComponent } from './pages/term-condition/term-condition.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ContactModalComponent } from './shared/contact-modal/contact-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TermConditionComponent,
    PrivacyPolicyComponent,
    ContactModalComponent,
   
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
    FormsModule,
    ReactiveFormsModule,
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