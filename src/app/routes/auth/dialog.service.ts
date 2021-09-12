import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }
  confirm(msg?:string){
    return of(window.confirm(msg || "确认离开？"))
  }
}
