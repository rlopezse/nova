import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import isLoggedIn from '../../services/auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // revisar el isLogged por si es injectable o no, si no es inyectable, entonces se puede usar directamente
  const token = inject(isLoggedIn).getToken();

  if (token) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(cloned);
  }

  return next(req);
};
