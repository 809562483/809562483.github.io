import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Config } from 'src/Config';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  configUrl = "http://localhost:3000/test"
  configJsonpUrl = "http://localhost:3000/jsonp"
  postUrl = "http://localhost:3000/post"
  loginUrl = "http://localhost:3000/login"
  loginoutUrl = "http://localhost:3000/loginout"
  options = {
    observe: 'body' as const
    , responseType: 'json' as const,
    params: { name: "zhangsan", age: 88 }
  }
  constructor(public http: HttpClient, private cookie: CookieService) {


  }
  handlerError(error: HttpErrorResponse) {
    if (error.status == 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
  getConfig() {
    return this.http.get<Config>(this.configUrl, this.options)
  }
  getConfigResponse() {
    return this.http.get(this.configUrl, {
      reportProgress: true,
      responseType: "text",
      observe: "response",
      params: { name: "zhangsan", age: 99 },
      headers: {
        Authorization: 'my-auth-token'
      }
    })
  }
  getConfigByJsonp() {
    return this.http.jsonp(this.configJsonpUrl, 'cbk').pipe(retry(3), catchError(this.handlerError))
  }
  postTest() {
    return this.http.post(this.postUrl, { name: 'helei', age: 18 }, {
      //默认请求头的contenttype为app/json
      headers: {
        'Content-Type': "application/x-www-form-urlencoded",

      }
    })
  }
  postFile(file: any | null) {
    // console.log(this.cookie.get("Webstorm-a278c594"))
    // this.cookie.set("My-Xsrf-Header", "9527")
    let fm = new FormData()
    fm.append("value", file, "上传文件")
    // fm.append("value2", "2222")
    // console.log(fm)
    return this.http.post(this.postUrl, fm, {
      withCredentials: true,
      observe: "events",
      reportProgress: true,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
  }
  login() {
    // console.log(this.cookie.get("Webstorm-a278c594"))

    return this.http.get(this.loginUrl, {
      withCredentials: true,
      observe: "events",
      reportProgress: true,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
  }
  loginout() {
    // console.log(this.cookie.get("Webstorm-a278c594"))

    return this.http.get(this.loginoutUrl, {
      withCredentials: true,
      observe: "events",
      reportProgress: true,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
  }
}
