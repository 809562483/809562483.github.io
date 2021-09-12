import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormStudyComponent } from './form-study/form-study.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NametestDirective } from './nametest.directive';
import { UserTestDirective } from './user-test.directive';
import { UserTestAsyncDirective } from './user-test-async.directive';


@NgModule({
  declarations: [
    FormStudyComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    NametestDirective,
    UserTestDirective,
    UserTestAsyncDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormsRoutingModule,

  ]
})
export class FormStudyModule { }
