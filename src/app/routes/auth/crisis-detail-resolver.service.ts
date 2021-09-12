import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { delay, mergeMap, switchMap, take } from 'rxjs/operators';
import { Crisis } from '../crisis-center/crisis';
import { CrisisService } from '../crisis-center/crisis.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
  constructor(private router: Router, private crisisservice: CrisisService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Crisis | Observable<Crisis> | Promise<Crisis> {


    const id = route.paramMap.get('id')!;
    return this.crisisservice.getCrisis(Number(id)).pipe(

      take(1),
      switchMap((c) => {
        if (c) return of(c);
        else {
          this.router.navigate(['/route/crisis-center']);
          return EMPTY;
        }
      })
    );
  }
}
