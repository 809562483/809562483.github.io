import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounce, debounceTime, delay, distinctUntilChanged, tap } from 'rxjs/operators';
import { HttpClientService } from '../http-client.service';
import { Config } from 'src/Config';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.less']
})
export class HttpComponent implements OnInit {
  search$ = new Subject()
  width = "0%"
  fileControl = new FormControl()
  res !: Observable<any>
  config: Config | undefined
  headers: string[] | undefined
  constructor(private $http: HttpClientService) {
    this.$http.getConfig().pipe(delay(2000)).subscribe((e: Config) => {
      // console.log(e)
      this.config = {
        age: e.age,
        date: e.date,
        heroesUrl: e.heroesUrl,
        name: e.name,
        textfile: e.textfile,
      }
    })
    this.$http.getConfigResponse().subscribe((e) => {
      // console.log(e)
      // this.headers = e.headers.keys().map(key => `${key}:${e.headers.get(key)}`)
      // this.config = { ...e.body! }
      // console.log(this.headers)
    })
    // this.$http.getConfigByJsonp().subscribe()
    // this.$http.postTest().subscribe()
  }

  ngOnInit(): void {
    this.search$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(
        e => { console.log(e) }
      )
    ).subscribe()
  }
  clickHandler() {
    this.$http.getConfigResponse().subscribe((e) => {
      // console.log(e)
      // this.headers = e.headers.keys().map(key => `${key}:${e.headers.get(key)}`)
      // this.config = { ...e.body! }
      // console.log(this.headers)
    })
  }
  fileHandler(e: HTMLInputElement) {
    console.log(e.files?.item(0))
    this.$http.postFile(e.files?.item(0)).pipe(
      tap(e => {
        if (e.type == 1) {
          this.width = e.loaded / (e.total ?? 0) * 100 + "%"

        }
      })
    ).subscribe()
  }
  search(e: KeyboardEvent) {
    this.search$.next((<HTMLInputElement>e.target).value)

  }
  login() {
    this.$http.login().subscribe()
  }
  loginout() {
    this.$http.loginout().subscribe()
  }
}
