/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-06-30 10:36:23
 * @LastEditors: Observer
 * @LastEditTime: 2021-08-05 16:59:30
 */
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { TestComponent } from './components/test/test.component';
import { TestService, A, BetterService } from "./services/test.service";
import { ChildrenComponent } from "./components/children/children.component"
import { myPipe } from "./services/mypipe.pipe";
import { TestComponentComponent } from './components/test-component/test-component.component';
import { SpyDirective } from './spy.directive';
import { ShowNameComponent } from './components/show-name/show-name.component';
import { ShowVersionComponent } from './components/show-version/show-version.component';
import { FatherControlChildrenMenthodComponent } from './components/father-control-children-menthod/father-control-children-menthod.component';
import { ControlChildrenByViewchildComponent } from './components/control-children-by-viewchild/control-children-by-viewchild.component';

import { ParentCommuniteChildrenComponent } from './components/parent-communite-children/parent-communite-children.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { SingleSlotProjectComponent } from './components/single-slot-project/single-slot-project.component';
import { MultiSlotProjectComponent } from './components/multi-slot-project/multi-slot-project.component';
import { MyTemplateComponent } from './components/my-template/my-template.component';
import { TemplateTestComponent } from './components/template-test/template-test.component';
import { BindingComponent } from './components/binding/binding.component';
import { ChildComponent } from './components/child/child.component';
import { SwitchComponent } from './components/switch/switch.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { CreateEmbededComponent } from './components/create-embeded/create-embeded.component';
import { UnlessComponent } from './components/unless/unless.component';
import { ComponentFactoryResolverComponent } from './components/component-factory-resolver/component-factory-resolver.component';
import { HostDirective } from './directives/host.directive';

import { ComponentComponent } from './components/component/component.component';
import { MypipePipe } from './directives/mypipe.pipe';
import { GetAttrDirective } from './directives/get-attr.directive';
import { ClickableDirective } from "./directives/clickable.directive"
import { Service1, Service2 } from "./services/UserService.service";
import { Outer1Component } from './components/outer1/outer1.component';
import { Outer2Component } from './components/outer2/outer2.component';
import { Inner1Component } from './components/inner1/inner1.component';
import { Inner2Component } from './components/inner2/inner2.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component'
import { MyGuard3Guard } from "./guards/my-guard3.guard";
// import { RouteComponent } from './routes/route/route.component';


import { LoginComponent } from './routes/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { App2RoutingModule } from './app2-routing/app2-routing.module';
import { HeroesModule } from './routes/heroes/heroes.module';
import { AppRouting2Module } from './app-routing2/app-routing2.module';
import { RouteModule } from './routes/route.module'
import { D4Component } from './d4/d4.component';
import { FormStudyModule } from './forms/forms.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { interCeptors } from './http/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    TestComponent,
    ChildrenComponent,
    myPipe,
    TestComponentComponent,
    SpyDirective,
    ShowNameComponent,
    ShowVersionComponent,
    FatherControlChildrenMenthodComponent,
    ControlChildrenByViewchildComponent,

    ParentCommuniteChildrenComponent,
    TwoWayBindingComponent,
    SingleSlotProjectComponent,
    MultiSlotProjectComponent,
    MyTemplateComponent,
    TemplateTestComponent,
    BindingComponent,
    ChildComponent,
    SwitchComponent,
    HighlightDirective,
    UnlessDirective,
    CreateEmbededComponent,
    UnlessComponent,
    ComponentFactoryResolverComponent,
    HostDirective,
    ComponentComponent,
    MypipePipe,
    GetAttrDirective,
    ClickableDirective,
    Outer1Component,
    Outer2Component,
    Inner1Component,
    Inner2Component,
    PagenotfoundComponent,
    D4Component,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    RouteModule,
    FormStudyModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterModule,


  ],
  providers: [interCeptors, { provide: TestService, useClass: TestService }, A, [{ provide: LOCALE_ID, useValue: 'en-US' }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
