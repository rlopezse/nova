import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import isLoggedIn from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  isLoggedIn = isLoggedIn;
}
