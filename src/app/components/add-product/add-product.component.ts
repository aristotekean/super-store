import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  meterForm: FormGroup;
  validationMessages: any;

  event = null;

  // @Output() showEvent = new EventEmitter<boolean>();

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
    this.productsService.createMeter(dataForm).subscribe(
      {
        next: (r) => {
          console.log(r);

        },
        error: (e) => {
          console.log(e.error);
          this.errorMessage = e;
        },
        complete: () => {
          alert('')
          this.errorMessage = null;
          this.meterForm.reset();
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
