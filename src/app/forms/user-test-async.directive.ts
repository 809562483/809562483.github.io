import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, take } from 'rxjs/operators';

@Directive({
  selector: '[appUserTestAsync]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UserTestAsyncDirective, multi: true }]
})
export class UserTestAsyncDirective implements AsyncValidator {

  constructor() { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    let name = control.get("name")
    let age = control.get("age")
    return name && age && name.value == 'helei' && age.value == 18 ? of(null).pipe(delay(3000)) : of({ userValidator: { value: false } }).pipe(delay(3000), take(1))
  }

}
