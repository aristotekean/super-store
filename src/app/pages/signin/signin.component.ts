import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../../services/user-data.service';
import { AuthenticationService } from '../../services/authentication.service';
import { UtilsService } from '../../services/utils.service';
import { NotificationsService } from '../../services/notifications.service';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  validationMessages: any;

  focus: any;
  focus1: any;

  errorMessage: string | null = null;;

  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private utilsService: UtilsService,
    private router: Router) {

    this.validationMessages = utilsService.getValidationMessages();

    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.required, Validators.minLength(5)
      ])
      )
    });

  }

  loginUser(data: any) {

    this.authenticationService.doLogin(data).subscribe(
      {
        next: (r) => {
          alert('Welcome admin');
          this.storageService.set('userData', r)
          setTimeout(() => {
            this.router.navigate(['/products']);
          }, 300);
        },
        error: (e) => {
          alert(e)
          this.errorMessage = e.error;
        },
        complete: () => this.loginForm.reset()
      }
    )

  }

  ngOnInit(): void {
  }

}
