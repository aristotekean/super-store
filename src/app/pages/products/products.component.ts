import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, tap } from 'rxjs';
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

  showAddProduct = false;

  textTosearch: string = '';
  page = 0;

  @ViewChild('search') input: ElementRef = new ElementRef(null);

  constructor(private productsService: ProductsService,) { }

  deleteItem(id: number, serial: string) {

    if (window.confirm(`Are you sure that want delete the item with serial ${serial}?`)) {
      this.productsService.deleteMeter(id.toString()).subscribe(
        {
          error: e => {
            console.log(e);
          },
          complete: () => {
            alert(`The item with serial ${serial} was deleted`);
            this.loadData();
          }
        })
    }

  }

  nextPage() {
    this.page = this.page + 1;
    this.loadData();
  }
  previusPage() {
    this.page = this.page - 1;
    this.loadData();
  }

  loadData() {
    this.productsService.getMeters(this.page, this.textTosearch).subscribe(
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

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(600),
        distinctUntilChanged(),
        tap((text) => {
          this.textTosearch = this.input.nativeElement.value;
          this.loadData();
        })
      )
      .subscribe();
  }

}
