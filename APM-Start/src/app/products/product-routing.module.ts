import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //use forChild for feature module, this is to ensure we don't register routing service provider a second time
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',
       canActivate: [ProductDetailGuard],
       component: ProductDetailComponent},
    ])
  ],
  //define what an importing module can use
  exports:[
    RouterModule
  ]
})
export class ProductRoutingModule { }
