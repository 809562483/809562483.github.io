import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.less']
})
export class ReactiveFormComponent implements OnInit {
  nameControl = new FormControl("123")
  // nameControl = '123' !!!!必须为对象
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  click2() {
    // 响应式表单还有一些方法可以用编程的方式修改控件的值，它让你可以灵活的修改控件的值而不需要借助用户交互。
    this.nameControl.setValue("789")


  }
  //交叉验证
  validator1: ValidatorFn = (fc: AbstractControl) => {
    let name = fc.get("name")
    let age = fc.get("age")
    return name && age && name.value == 'helei' && age.value == 18 ? null : { userValidator: { value: false } }
  }
  profileFormGroup = new FormGroup({
    name: new FormControl("helei"),
    age: new FormControl(18),
    address: new FormGroup({
      province: new FormControl("四川省"),
      street: new FormControl("子昂街道")
    })
  }, { validators: this.validator1 })

  testFormArray = this.fb.group({
    alias: this.fb.array([
      this.fb.control(['']),
      this.fb.control(['']),
      this.fb.control([''])
    ])
  })
  get aliass() {

    return this.testFormArray.get("alias") as FormArray
  }
  arraySubmit() {
    console.log(this.aliass.controls[0])
    console.log(this.aliass.controls[1])
    console.log(this.aliass.controls[2])
  }
  click3() {
    // 响应式表单还有一些方法可以用编程的方式修改控件的值，它让你可以灵活的修改控件的值而不需要借助用户交互。
    //全量赋值
    this.profileFormGroup.setValue({
      name: "zhangsan", age: 19, address: {
        province: "北京市",
        street: "北二街"
      }
    })
  }
  click4() {
    // 响应式表单还有一些方法可以用编程的方式修改控件的值，它让你可以灵活的修改控件的值而不需要借助用户交互。
    //全量赋值
    this.profileFormGroup.patchValue({
      age: 19
    })
  }
  submit() {
    console.log(this.profileFormGroup.value, this.profileFormGroup.valid)
  }
  profileFormGroupByBuilder = this.fb.group({
    name: ['helei', Validators.required],
    age: [18],
    address: this.fb.group({
      province: ['四川省', this.provinceValidator(/^.{2,3}省$/)],
      street: ['子昂街道']
    })
  })
  provinceValidator(reg: RegExp) {
    return (formControl: AbstractControl) => {
      const flag = reg.test(formControl.value)

      return !flag ? { validatorProvince: { value: formControl.value } } : null
    }
  }
  click3ByBuilder() {
    // 响应式表单还有一些方法可以用编程的方式修改控件的值，它让你可以灵活的修改控件的值而不需要借助用户交互。
    //全量赋值
    this.profileFormGroupByBuilder.setValue({
      name: "zhangsan", age: 19, address: {
        province: "北京市",
        street: "北二街"
      }
    })
  }
  click4ByBuilder() {
    // 响应式表单还有一些方法可以用编程的方式修改控件的值，它让你可以灵活的修改控件的值而不需要借助用户交互。
    //全量赋值
    this.profileFormGroupByBuilder.patchValue({
      age: 20
    })
  }
  submitByBuilder() {
    console.log(this.profileFormGroupByBuilder.value, this.profileFormGroupByBuilder.valid)
  }
}
