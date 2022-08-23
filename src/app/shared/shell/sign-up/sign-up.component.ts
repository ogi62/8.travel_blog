import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { authResponseInterface } from 'src/app/core/types/authResponseInterface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUp!: FormGroup;
  isLoading = false;
  error!: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm() {
    this.signUp = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: [
        '',
        Validators.required,
      ],
    });
  }

  onSubmit(form: FormGroup) {
    console.log(this.signUp.value);

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<authResponseInterface>;
    this.isLoading = true;

    authObs = this.authService.registerUser(email, password);

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/all_blogs']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();


  }
}
