import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutingModule } from './http-routing.module';
import { HttpComponent } from './http/http.component';
import { interCeptors } from './http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    HttpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
  ],
  providers: [
    [CookieService]
  ]
})
export class HttpModule { }
