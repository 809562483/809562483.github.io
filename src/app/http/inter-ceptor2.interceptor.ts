import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RequestCacheService } from './request-cache.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class InterCeptor2Interceptor implements HttpInterceptor {

  constructor(private cache: RequestCacheService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.isCacheable(request))
      return next.handle(request)
    let res = this.cache.get(request)
    return res ? of(res) : this.sendRequest(request, next, this.cache)
  }
  isCacheable(req: HttpRequest<any>) {
    if (req.url == "http://localhost:3000/test")
      return true
    else
      return false
  }
  sendRequest(req: HttpRequest<any>, next: HttpHandler, cache: RequestCacheService) {
    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse)
            cache.set(req, event)
        }
      )
    )
  }
}
