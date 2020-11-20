import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductMessageComponent } from './product-message.component';

const routes: Routes = [ {path:'', component:ProductMessageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductMessageRoutingModule { }
