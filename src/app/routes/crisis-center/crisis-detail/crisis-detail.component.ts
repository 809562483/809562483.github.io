import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crisis } from '../crisis';
import { CrisisService } from "../crisis.service"
import { timer, interval, of, Observable } from 'rxjs';
import { delay, flatMap, map, switchMap, tap } from 'rxjs/operators';
import { DialogService } from '../../auth/dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.less']
})
export class CrisisDetailComponent implements OnInit {
  crisis$!: Observable<Crisis | undefined>
  id!: number
  name = "123456"
  editName: string | undefined = undefined
  constructor(private activeRoute: ActivatedRoute, private crisisService: CrisisService, private router: Router, private dialogservice: DialogService) {
    // this.id = Number(this.activeRoute.snapshot.paramMap.get("id"))
    // const t = interval(500)
    // t.pipe(
    //   switchMap((v)=>of(v**2))
    // ).subscribe(v=>console.log(v))
    // interval(1000).pipe(
    //   flatMap(e=>of(e**2))
    // ).subscribe(e=>console.log(e))
  }

  ngOnInit() {

    this.crisis$ = this.activeRoute.data.pipe(
      switchMap(data => {

        const c: Crisis = data.realCrisis

        return of(c)
      }),
      tap(e => {

        if (this.editName == undefined || e.id != this.id) {
          this.id = e?.id
          this.editName = e?.name
        }

      })
    )

    // this.crisis$ = this.activeRoute.paramMap.pipe(
    //   delay(1000),
    //   switchMap(paramMap=>this.crisisService.getCrisis(Number(paramMap.get("id")))),
    //   tap(e=>{
    //     if(this.editName == undefined)
    //     this.editName = e?.name
    //   })
    // )
  }
  changeValue(e: string) {

    this.editName = e

  }
  back() {
    this.crisis$.subscribe(crisis => {
      this.router.navigate(['route/crisis-center', { selectedId: crisis?.id }])
    })
  }
  cancel() {
    this.gotoCrisis()
  }
  gotoCrisis() {
    this.router.navigate(["/route/crisis-center"])
  }
  save() {
    this.crisis$.subscribe(e => {

      if (e && this.editName) {

        e.name = this.editName
        this.gotoCrisis()
      }
      // this.gotoCrisis()
    })


  }
  saveName() {
    this.crisis$.subscribe(e => {

      if (e && this.editName) {
        console.log("savesavesave")
        e.name = this.editName
      }
      // this.gotoCrisis()
    }).unsubscribe()
  }
  canDeactivate() {
    return this.crisis$.pipe(
      switchMap(crisis => {

        if (crisis?.name == this.editName) {
          return of(true)
        }
        return this.dialogservice.confirm("是否保存？").pipe(
          tap(
            flag => flag && this.saveName()
          )
        )
      })
    )
  }
}
