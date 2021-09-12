import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl:string|null = null;
  constructor() { }
  login(){
    return of(true).pipe(
      delay(2000),
      tap(()=>{
        this.isLoggedIn = true
      })
    )
  }
  logout(): void {
    this.isLoggedIn = false;
  }
}
