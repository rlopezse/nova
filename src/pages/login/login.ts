import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RouterLink, Router } from '@angular/router';
import { api, googleClientId } from '../../environments/environment';
import { ApiLoginPayload, ApiLoginResponse } from '../../types/login/login';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent implements AfterViewInit {
  form: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login$(credentials: ApiLoginPayload) {
    return this.http.post<ApiLoginResponse>(api.url + '/user/login', credentials).pipe(
      tap((res: ApiLoginResponse) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
      }),
    );
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      this.login$(this.form.value).subscribe({
        next: (response) => {
          this.router.navigate(['/productos']);
          console.log(response);
        },
        error: (err) => {
          console.log(err.message);
          this.errorMessage = err.message;
        },
      });
    }
  }

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: googleClientId.id,
      callback: this.handleCredentialResponse.bind(this),
    });

    google.accounts.id.renderButton(document.getElementById('google-button'), {
      theme: 'outline',
      size: 'large',
      shape: 'pill',
    });
  }

  handleCredentialResponse(response: any) {
    // desde aquí puedes enviar el token a tu backend para autenticar al usuario
    this.http
      .post(api.url + '/user/login-google', { idToken: response.credential })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
