import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductTerminalComponent } from './product-terminal.component';

const routes: Routes = [{ path:'', component: ProductTerminalComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductTerminalRoutingModule { }
