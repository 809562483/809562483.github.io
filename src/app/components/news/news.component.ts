/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-07-02 09:48:23
 * @LastEditors: Observer
 * @LastEditTime: 2021-08-05 15:58:03
 */
import { ApplicationRef, Component, ComponentFactoryResolver, ContentChild, ContentChildren, ElementRef, forwardRef, Inject, InjectionToken, Injector, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {Logger} from "../../api/logger.service"
import {TestService,A,NoProviderService} from "../../services/test.service"
import {TestComponent} from "../test/test.component"
import {FatherControlChildrenMenthodComponent} from "../father-control-children-menthod/father-control-children-menthod.component"
import { Subject } from 'rxjs';
import {SubjectService} from "../../subject.service"
import {MultiSlotProjectComponent} from "../multi-slot-project/multi-slot-project.component"
import {SingleSlotProjectComponent} from "../single-slot-project/single-slot-project.component"
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import {GetAttrDirective} from "../../directives/get-attr.directive"
import {NgForm,NgModel} from "@angular/forms"
import { inject } from '@angular/core/testing';
import {UserService,Service1,Service2,UserServiceProvider} from "../../services/UserService.service"
import {ActivatedRoute, Router} from "@angular/router"

interface sayAAA{
    sayAAA:()=>{}
    name:string
}
const EEE = new InjectionToken<sayAAA>("sayAAAInterface")
const BASE_URL = new InjectionToken<string>("baseurl")
class CCC{
  sayAAA(){
    console.log("I am CCC")
  }
}
class DDD{
  sayAAA(){
    console.log("I am DDD")
  }
}
export class AAA {
  sayAAA(){
    console.log("I am AAA")
  }

}
@Component({
  selector: 'app-root',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
  providers:[AAA,{provide:CCC,useExisting:forwardRef(()=>AAA)},
  {provide:DDD,useValue:new DDD()},
{provide:EEE,useClass:DDD},
{provide:BASE_URL,useValue:"123123456"},UserServiceProvider,Service1,Service2]
})

export class NewsComponent implements OnInit {
  temp = true
  TwoWayDataBind:any
  childMsg = ""
    message = 'I\'m read only!';
  canEdit = false;
    isShow = true;
   fromChild :any= ""
    ngOnInit(){
      this.subject.children.subscribe(e=>{
        this.fromChild = e
      })
    }
  users = [
    {
      id:1,
      name:"zhangsan",
      age:18
    },{
      id:2,
      name:"lisi",
      age:20
    }
  ]
  //??????????????????????????????????????????
  constructor(private logger:Logger,private testService:TestService,private subject:SubjectService,
    public cfr:ComponentFactoryResolver,
    private injector:Injector,
    private appRef:ApplicationRef,
    private aaa:AAA,
    private ccc:CCC,
    ddd:DDD,
    @Inject(EEE) eee:sayAAA,
    @Inject(BASE_URL) base:string,
    user:UserService,
    private router:Router,
    // private nopro:NoProviderService
    private activatedroute:ActivatedRoute
    ){
 
      console.log("##############################")
      user.show()
      console.log("##############################")
      console.log(base)
      eee.sayAAA()
      console.log(eee.name)
      console.log("##############################")
      ddd.sayAAA()
      this.aaa.sayAAA()
      this.ccc.sayAAA()
      // this.testService.addItem()
      const Ele = createCustomElement(SingleSlotProjectComponent,{injector});
      if(!customElements.get("my-element1"))
      customElements.define("my-element1",Ele)
      
      
      //

  }
  
  changeFromChild(e:any){
    this.childMsg = e
  }
  change(){
    this.message = "hahahahahaha"
  }
  
   changeContent(){
     this.isShow = !this.isShow
   }
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = 'I\'m read only!';
    }
  }
  showMsg(){
    alert(this.message)
  }
  write(){
      this.logger.write("????????????")
  }
  addItem(){
    this.testService.addItem()
    
  }
  //??????????????????????????????????????????
  @ViewChild("inp")
  inp!:ElementRef 
  show(){
console.log(this.TwoWayDataBind)
this.inp.nativeElement.value = ""
this.inp.nativeElement.focus()
  }
 ifTest = true
 output = ""
 test = ""
 //???????????????setter
  names = ['  ?????????', '   ','He Lei']
  minor = 23
  major = 1
  //???????????????????????????
  @ViewChild("interval2") interval2!:FatherControlChildrenMenthodComponent;
  //?????????????????????????????????????????????????????????
  seconds(){return 0}
  tmp = setTimeout(() => {
    this.seconds = ()=>this.interval2.counts
  }, 0);
  
  input :any= ""
  clickHandler(){
    this.subject.parent.next(this.input)
    this.input = ""
  }
  //?????????????????????????????????
  parentData = 20
  //??????????????????????????????
  @ViewChild("c1") c1!:MultiSlotProjectComponent
  @ViewChild("c2") c2!:SingleSlotProjectComponent
  showC1(){
    this.c1.sayHello()
  }
  showC2(){
    this.c2.sayHello()
  }
  a = {
    name:123
  }
  flag = true
  currentClass = {'template-test':this.flag}
  // class???????????????????????????
  changeClass(){
    this.flag = !this.flag
    this.isBig = !this.isBig
  }
  //?????????????????????????????????
  isBig = false
  //???????????????
  color = ""
  //????????????????????????
  condition = false
  //??????????????????
  @ViewChild("tpl1",{read:ViewContainerRef}) tpl1!:ViewContainerRef
  render1(){
    const cf = this.cfr.resolveComponentFactory(SingleSlotProjectComponent) 
    this.tpl1.createComponent(cf)
  }
  //?????????????????????by????????????
  createCustomElement(){
      //??????????????????
      const at = document.querySelector("[class=createCustomElement]")
      //?????????????????????
      const tag = document.createElement("my-element")
    
      //????????????
      const cF = this.cfr.resolveComponentFactory(SingleSlotProjectComponent)
      const cR = cF.create(this.injector,[],tag)
      //????????????
      this.appRef.attachView(cR.hostView)
          cR.instance.outer.subscribe((v)=>{
      console.log(v)
    })
      //?????????????????????
      at?.appendChild(tag)

      //
  }
  //?????????????????????by???????????????
  createCustomElement1(){
    //??????????????????
    const at = document.querySelector("[class=createCustomElement]")
    //?????????????????????
    // const tag:NgElement &
    // WithProperties<SingleSlotProjectComponent>  = document.createElement("my-element1")as any
    const tag = document.createElement("my-element1")
    // //????????????
    // const cF = this.cfr.resolveComponentFactory(SingleSlotProjectComponent)
    // const cR = cF.create(this.injector,[],tag)
    // //????????????
    // this.appRef.attachView(cR.hostView)
    // cR.instance.outer.subscribe((v)=>{
    //   console.log(v)
    // })
    type a = {
      name:string
    }
    type b = {
      age:number
    }
    const c:a&b = {name:"helei",age:18}
    tag.addEventListener("outer",function(v){
      // console.log("eee")
      // tslint:disable-next-line
      let c = <CustomEvent> v
      console.log(c.detail)
    })
    // ?????????????????????
    at?.appendChild(tag)

    
}
//composite object 
person = [
      {
        name:"helei",
        sex:1
      },
      {
        name:"zhangsan",
        sex:0
      }
]
  person1 = 100
  changeMath(){
      this.person.push({name:"lisi",sex:1})
  }
// ngAfterViewInit(){
//   setTimeout(() => {
//     this.person.score[0].math = 200
//     this.person1 = 200
//     console.log(this.person1)
//   }, 2000);
// }
  property = 6
  //???????????????
  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
  v = true
  //??????????????????
  @ViewChild("inp6") inp4:any
  tempVariables(v:any){
    console.dir(v)
    // console.log(this.inp4)
  }
  //???????????????
  jumpToOuter2(){
    // this.router.navigate([{outlets:{r1:null}}])

    this.router.navigate(["outer2",{outlets:{r111:'d4444'}}],{
      relativeTo:this.activatedroute,
      queryParams:{
        gender:"female",
        hobby:"game"
      },
      //merge?????????????????????????????????,preserve?????????????????????
      queryParamsHandling:"merge",

    })
  }
}


export class BBB {

  sayBBB(){
    console.log("I am BBB")
  }
}


