import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutInvestorComponent } from './about-investor.component';

const routes: Routes = [{path:'', component: AboutInvestorComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutInvestorRoutingModule { }
