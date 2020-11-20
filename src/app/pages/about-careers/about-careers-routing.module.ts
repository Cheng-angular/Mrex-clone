import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutCareersComponent } from './about-careers.component';

const routes: Routes = [{path: '', component: AboutCareersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutCareersRoutingModule { }
