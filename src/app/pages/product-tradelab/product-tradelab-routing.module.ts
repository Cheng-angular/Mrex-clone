import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductTradelabComponent } from './product-tradelab.component';

const routes: Routes = [{ path:'', component: ProductTradelabComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductTradelabRoutingModule { }
