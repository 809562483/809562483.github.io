import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterCeptor1Interceptor } from "./inter-ceptor1.interceptor";

import { InterCeptor2Interceptor } from "./inter-ceptor2.interceptor";
import { Interceptor3Interceptor } from "./interceptor3.interceptor";



export const interCeptors = [
  // { provide: HTTP_INTERCEPTORS, useClass: InterCeptor1Interceptor, multi: true },
  // { provide: HTTP_INTERCEPTORS, useClass: InterCeptor2Interceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: Interceptor3Interceptor, multi: true },
]