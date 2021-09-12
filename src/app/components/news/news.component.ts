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
  //依赖的注册过程优先于构造函数
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
      this.logger.write("依赖注入")
  }
  addItem(){
    this.testService.addItem()
    
  }
  //在组件中声明对视图元素的引用
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
 //测试子组件setter
  names = ['  呵呵磊', '   ','He Lei']
  minor = 23
  major = 1
  //获取组件的引用对象
  @ViewChild("interval2") interval2!:FatherControlChildrenMenthodComponent;
  //开启定时器触发新的数据流变更检测周期。
  seconds(){return 0}
  tmp = setTimeout(() => {
    this.seconds = ()=>this.interval2.counts
  }, 0);
  
  input :any= ""
  clickHandler(){
    this.subject.parent.next(this.input)
    this.input = ""
  }
  //父子组件的双向数据绑定
  parentData = 20
  //组件内获取子视图引用
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
  // class标签与方法一起使用
  changeClass(){
    this.flag = !this.flag
    this.isBig = !this.isBig
  }
  //三元表达式控制内联样式
  isBig = false
  //自定义指令
  color = ""
  //自定义结构型指令
  condition = false
  //渲染动态组件
  @ViewChild("tpl1",{read:ViewContainerRef}) tpl1!:ViewContainerRef
  render1(){
    const cf = this.cfr.resolveComponentFactory(SingleSlotProjectComponent) 
    this.tpl1.createComponent(cf)
  }
  //创建自定义元素by动态加载
  createCustomElement(){
      //获取锚点标签
      const at = document.querySelector("[class=createCustomElement]")
      //创建自定义元素
      const tag = document.createElement("my-element")
    
      //创建组件
      const cF = this.cfr.resolveComponentFactory(SingleSlotProjectComponent)
      const cR = cF.create(this.injector,[],tag)
      //添加视图
      this.appRef.attachView(cR.hostView)
          cR.instance.outer.subscribe((v)=>{
      console.log(v)
    })
      //添加元素至界面
      at?.appendChild(tag)

      //
  }
  //创建自定义元素by自定义元素
  createCustomElement1(){
    //获取锚点标签
    const at = document.querySelector("[class=createCustomElement]")
    //创建自定义元素
    // const tag:NgElement &
    // WithProperties<SingleSlotProjectComponent>  = document.createElement("my-element1")as any
    const tag = document.createElement("my-element1")
    // //创建组件
    // const cF = this.cfr.resolveComponentFactory(SingleSlotProjectComponent)
    // const cR = cF.create(this.injector,[],tag)
    // //添加视图
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
    // 添加元素至界面
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
  //插值安全性
  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
  v = true
  //解析模板变量
  @ViewChild("inp6") inp4:any
  tempVariables(v:any){
    console.dir(v)
    // console.log(this.inp4)
  }
  //自定义跳转
  jumpToOuter2(){
    // this.router.navigate([{outlets:{r1:null}}])

    this.router.navigate(["outer2",{outlets:{r111:'d4444'}}],{
      relativeTo:this.activatedroute,
      queryParams:{
        gender:"female",
        hobby:"game"
      },
      //merge是新参数对旧参数的覆盖,preserve是以旧参数为准
      queryParamsHandling:"merge",

    })
  }
}


export class BBB {

  sayBBB(){
    console.log("I am BBB")
  }
}


