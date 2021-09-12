import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestCacheService {
  //缓存保存时间
  timeout = 1 * 30 * 1000
  caches = new Map()
  constructor() { }
  get(req: HttpRequest<any>) {
    if ([...this.caches.keys()].includes(req.urlWithParams)) {
      if (Date.now() - this.caches.get(req.urlWithParams).time < this.timeout)
        return this.caches.get(req.urlWithParams).body
      else
        return null
    }
  }
  set(req: HttpRequest<any>, res: HttpResponse<any>) {
    this.caches.set(req.urlWithParams, { time: Date.now(), body: res })

  }
}
