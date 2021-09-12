import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap, map, finalize, tap } from 'rxjs/operators';
import { RequestCacheService } from './request-cache.service';

@Injectable()
export class InterCeptor1Interceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.headers.get("Authorization") == "my-auth-token") {
      let begin = new Date().getTime()
      return next.handle(request.clone({
        params: request.params.set("name", "helei"),
        headers: request.headers.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36")
      })).pipe(
        finalize(() => {
          console.log("响应完毕：", new Date().getTime() - begin)
        }),
        map((e) => {
          if (e instanceof HttpResponse) {
            // console.log(e.body)

            // return e.clone({
            //   body: { value: null }
            // })
            // return new HttpResponse({ body: { value: "vvv" } })
            return e.clone({ body: this.parseJson(e.body) })
          }

          else
            return e
        })
      );
    }
    else
      // return next.handle(request)
      return of(new HttpResponse({ body: { value: "customize" } }))
  }
  parseJson(str: string) {
    return JSON.parse(str)
  }

}
