import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, NavigationExtras, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
interface CanDeactivateCom {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<CanDeactivateCom>, CanLoad {
  constructor(private authservice: AuthService, private router: Router, private activateRoute: ActivatedRoute) {

  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return this.checkLogin(`/route/${route.path}`)
  }
  canDeactivate(component: CanDeactivateCom, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.canDeactivate() ? component.canDeactivate() : true
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // console.log(state.url)
    // throw new Error('Method not implemented.');
    return this.canActivate(childRoute, state)
    // return false
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url = state.url

    return this.checkLogin(url);
    // return true
  }

  checkLogin(url: string) {
    if (this.authservice.isLoggedIn) return true;
    // Store the attempted URL for redirecting
    this.authservice.redirectUrl = url;
    const sessionId = Math.random().toString().split(".")[1];
    const navigationExtras: NavigationExtras = {
      queryParams: { session_id: sessionId },
      fragment: 'anchor',

    };
    alert("请先登录")
    console.log(this.activateRoute)
    // Redirect to the login page
    //  return this.router.parseUrl('/route/login');
    return this.router.createUrlTree(['/route/login'], navigationExtras)
  }
}
