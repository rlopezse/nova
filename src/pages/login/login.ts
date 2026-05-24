import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { api } from '../../environments/environment';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
    form: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.form.valid);
    if(this.form.valid) {
      this.http.post(api+ '/user/login', this.form.value).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
