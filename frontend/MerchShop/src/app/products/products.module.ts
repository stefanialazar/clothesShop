import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from '../create-product/create-product.component';
import { RouterModule } from '@angular/router';
import { CreateProductGuard } from '../create-product/create-product.guard';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
  ],
  imports: [ CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      {
        path: 'products/:id',
        canActivate: [CreateProductGuard],
        component: CreateProductComponent
      }
    ]),
  ]
})
export class ProductModule { }

