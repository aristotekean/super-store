import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  item: any = '';

  @Input('item') set updateItem(item: any) {
    this.item = item;
  }

  constructor(private productsService: ProductsService) { }

  deleteItem(id: number, serial: string) {

    if (window.confirm(`Are you sure that want delete the item with serial ${serial}?`)) {
      this.productsService.deleteMeter(id.toString()).subscribe(
        {
          error: e => {
            console.log(e);
          },
          complete: () => {
            alert(`The item with serial ${serial} was deleted`);
          }
        })
    }

  }

  ngOnInit(): void {
  }

}
