import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
interface Response {
  items?: Item[];
  page?: number;
  size?: number;
  total?: number;
  pages?: number;
  next_page?: any;
  previous_page?: any;
}

interface Item {
  serial: string;
  connection_type: string;
  storage_system: string;
  condition: string;
  owner: string;
  location: string;
  manufacturer: string;
  purchase: string;
  i_max: number;
  i_b: number;
  i_n: number;
  seals: number;
  id: number;
  created_at: string;
  updated_at?: any;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  response: Response = {}

  constructor(private productsService: ProductsService) { }

  loadData() {
    this.productsService.getMeters().subscribe(
      {
        next: (v) => {
          Object.assign(this.response, v);
        }, error: (e) => {
          console.log(e);
        }
      }
    )
  }

  ngOnInit(): void {
    this.loadData();
  }

}
