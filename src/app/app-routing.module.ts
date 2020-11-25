import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactusComponent } from './pages/contactus/contactus.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ResearchComponent } from './pages/research/research.component';
import { TermConditionComponent } from './pages/term-condition/term-condition.component';


const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '', loadChildren: () => import('./pages/landingpage/landingpage.module').then( m => m.LandingpageModule), pathMatch: 'full'},
  { path: 'product-terminal', loadChildren: () => import('./pages/product-terminal/product-terminal.module').then( m => m.ProductTerminalModule), pathMatch: 'full'},
  { path: 'product-tradelab', loadChildren: () => import('./pages/product-tradelab/product-tradelab.module').then( m => m.ProductTradelabModule), pathMatch: 'full'},
  { path: 'product-message', loadChildren: () => import('./pages/product-message/product-message.module').then( m => m.ProductMessageModule), pathMatch: 'full'},
  { path: 'about-company', loadChildren: () => import('./pages/about-company/about-company.module').then( m => m.AboutCompanyModule), pathMatch: 'full'},
  { path: 'about-career', loadChildren: () => import('./pages/about-careers/about-careers.module').then( m => m.AboutCareersModule), pathMatch: 'full'},
  { path: 'about-investor', loadChildren: () => import('./pages/about-investor/about-investor.module').then( m => m.AboutInvestorModule), pathMatch: 'full'},
  
  { path: 'research', component: ResearchComponent, pathMatch: 'full'},
  { path: 'pricing', component: PricingComponent, pathMatch: 'full'},
  { path: 'term-condition', component: TermConditionComponent, pathMatch: 'full'},
  { path: 'privacy-policy', component: PrivacyPolicyComponent, pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
