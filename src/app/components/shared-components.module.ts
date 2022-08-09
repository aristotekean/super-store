import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewProductComponent } from './view-product/view-product.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    AddProductComponent,
    EditProductComponent,
    ViewProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    AddProductComponent,
    ViewProductComponent,
    EditProductComponent
  ]
})
export class SharedComponentsModule { }
