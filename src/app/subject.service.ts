import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  parent = new Subject()
  children = new Subject()
  constructor() { }
  childrenPublish(e:any){
    this.children.next(e)
    
  }
  parentPublish(e:any){
    this.parent.next(e)
  }
}
