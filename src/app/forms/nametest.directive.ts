import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appNametest]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NametestDirective, multi: true }]
})
export class NametestDirective implements Validator {
  @Input("appNametest") appNametest = ""
  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return this.appNametest ? this.nameTest(new RegExp(this.appNametest, "i"))(control) : null
  }
  nameTest(reg: RegExp) {
    return (fc: AbstractControl) => {
      let flag = reg.test(fc.value)
      return flag ? null : { nameError: { value: fc.value } }
    }
  }
}
