import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class Interceptor3Interceptor implements HttpInterceptor {

  constructor(private cookie: CookieService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const apiReq = req.clone({ url: `http://localhost:3000${req.url}` });
    // let nreq = req.clone({ headers: req.headers.set("My-Xsrf-Header", this.cookie.get("My-Xsrf-Cookie")) });
    return next.handle(req);
  }
}
