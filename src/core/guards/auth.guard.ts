import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import isLoggedIn from '../../services/auth/auth.service';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  console.log('authGuard called');

  if (isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
