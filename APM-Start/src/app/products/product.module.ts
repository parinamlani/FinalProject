import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'

import { ProductListComponent } from './product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import{SharedModule} from '../shared/shared.module';

;

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
{path:'products',component:ProductListComponent},
{path : 'products/:id/edit',component:ProductEditComponent}
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
