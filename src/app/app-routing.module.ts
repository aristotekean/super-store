import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module')
      .then(m => m.SigninModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module')
      .then(m => m.ProductsModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
