import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloadStrategyService implements PreloadingStrategy {
  preloadModules: string[] = []
  constructor() { }
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route?.data?.preload) {
      route?.path && this.preloadModules.push(route.path)
      return fn();
    } else {
      return of()
    }
  }
}
