import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrisises(): Observable<Crisis[]> {
    const crises = of(CRISES);
    this.messageService.add('CrisisService: fetched crises');
    return crises;
  }
  getCrisis(id:Number):Observable<Crisis|undefined>{
    const hero = of(CRISES.find(e=>e.id === id))
    this.messageService.add('CrisisService: select hero');
    return hero
  }
}
