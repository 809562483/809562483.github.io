import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
//模板表单交叉验证
@Directive({
  selector: '[appUserTest]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UserTestDirective, multi: true }]
})
export class UserTestDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    let name = control.get("name")
    let age = control.get("age")
    return name && age && name.value == 'helei' && age.value == 18 ? null : { userValidator: { value: false } }
  }

}
