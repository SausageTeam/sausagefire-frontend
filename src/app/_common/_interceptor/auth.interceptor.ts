import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { AUTH_URL } from '../_constant/constant.module';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe( tap(() => {},
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          console.log(err);
          const redirectUrl = err.headers.get('redirecturl') ? err.headers.get('redirecturl') : AUTH_URL;
          window.location.href = redirectUrl + "?redirect=" + window.location.href;
        }
      })
    );
  }
}