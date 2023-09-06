import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./routes/product/product.component').then(m => m.ProductComponent),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./routes/product-details/product-details/product-details.component')
        .then(m => m.ProductDetailsComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
