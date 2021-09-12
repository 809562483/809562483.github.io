import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormStudyComponent } from './form-study/form-study.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    path: "form", component: FormStudyComponent, children: [
      { path: "reactiveForm", component: ReactiveFormComponent },
      { path: "templateDrivenForm", component: TemplateDrivenFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
