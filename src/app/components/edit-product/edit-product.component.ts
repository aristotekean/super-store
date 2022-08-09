import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  item: any = '';

  @Input('item') set updateItem(item: any) {
    this.item = item;
    this.meterForm.patchValue(item);
  }

  meterForm: FormGroup;
  validationMessages: any;

  errorMessage: string | null = null;

  constructor(private utilsService: UtilsService,
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
  ) {

    this.validationMessages = utilsService.getValidationMessages();

    this.meterForm = this.formBuilder.group({
      serial: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])),
      connection_type: new FormControl('', Validators.compose([
        Validators.required
      ])),
      storage_system: new FormControl('', Validators.compose([
        Validators.required
      ])),
      condition: new FormControl('', Validators.compose([
        Validators.required
      ])),
      owner: new FormControl('', Validators.compose([
        Validators.required
      ])),
      location: new FormControl('', Validators.compose([
        Validators.required
      ])),
      manufacturer: new FormControl('', Validators.compose([
        Validators.required
      ])),
      purchase: new FormControl('', Validators.compose([
        Validators.required
      ])),
      i_max: new FormControl('', Validators.compose([
        Validators.required
      ])),
      i_b: new FormControl('', Validators.compose([
        Validators.required
      ])),
      i_n: new FormControl('', Validators.compose([
        Validators.required
      ])),
      seals: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  createMeter(dataForm: any) {
    this.productsService.editMeter(this.item.id, dataForm).subscribe(
      {
        next: (r) => {
          console.log(r);
        },
        error: (e) => {
          console.log(e.error);
          this.errorMessage = e;
        },
        complete: () => {
          alert(`Product ${dataForm.serial} actualizado con exito`)
          this.meterForm.reset();
        }
      }
    );
  }

  ngOnInit(): void {
  }


}
