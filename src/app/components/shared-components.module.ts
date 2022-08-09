import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    AddProductComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    AddProductComponent
  ]
})
export class SharedComponentsModule { }
