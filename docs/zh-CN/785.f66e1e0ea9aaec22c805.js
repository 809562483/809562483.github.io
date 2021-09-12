(self.webpackChunkmy_first_angular=self.webpackChunkmy_first_angular||[]).push([[785],{8785:(t,e,s)=>{"use strict";s.r(e),s.d(e,{HttpModule:()=>T});var r=s(8583),o=s(7930),i=s(9765),n=s(1289),c=s(7393),l=s(3637);class h{constructor(t,e){this.dueTime=t,this.scheduler=e}call(t,e){return e.subscribe(new u(t,this.dueTime,this.scheduler))}}class u extends c.L{constructor(t,e,s){super(t),this.dueTime=e,this.scheduler=s,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(a,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:t}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}}clearDebounce(){const t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)}}function a(t){t.debouncedNext()}class p{constructor(t,e){this.compare=t,this.keySelector=e}call(t,e){return e.subscribe(new d(t,this.compare,this.keySelector))}}class d extends c.L{constructor(t,e,s){super(t),this.keySelector=s,this.hasKey=!1,"function"==typeof e&&(this.compare=e)}compare(t,e){return t===e}_next(t){let e;try{const{keySelector:s}=this;e=s?s(t):t}catch(r){return this.destination.error(r)}let s=!1;if(this.hasKey)try{const{compare:t}=this;s=t(this.key,e)}catch(r){return this.destination.error(r)}else this.hasKey=!0;s||(this.key=e,this.destination.next(t))}}var g=s(3342),f=s(665),b=s(3018),m=s(205);class y{constructor(t,e){this.count=t,this.source=e}call(t,e){return e.subscribe(new v(t,this.count,this.source))}}class v extends c.L{constructor(t,e,s){super(t),this.count=e,this.source=s}error(t){if(!this.isStopped){const{source:e,count:s}=this;if(0===s)return super.error(t);s>-1&&(this.count=s-1),e.subscribe(this._unsubscribeAndRecycle())}}}var Z=s(5304),U=s(1841),w=s(1584);let k=(()=>{class t{constructor(t,e){this.http=t,this.cookie=e,this.configUrl="http://localhost:3000/test",this.configJsonpUrl="http://localhost:3000/jsonp",this.postUrl="http://localhost:3000/post",this.loginUrl="http://localhost:3000/login",this.loginoutUrl="http://localhost:3000/loginout",this.options={observe:"body",responseType:"json",params:{name:"zhangsan",age:88}}}handlerError(t){return 0==t.status?console.error("An error occurred:",t.error):console.error(`Backend returned code ${t.status}, body was: ${t.error}`),(0,m._)("Something bad happened; please try again later.")}getConfig(){return this.http.get(this.configUrl,this.options)}getConfigResponse(){return this.http.get(this.configUrl,{reportProgress:!0,responseType:"text",observe:"response",params:{name:"zhangsan",age:99},headers:{Authorization:"my-auth-token"}})}getConfigByJsonp(){return this.http.jsonp(this.configJsonpUrl,"cbk").pipe(function(t=-1){return e=>e.lift(new y(t,e))}(3),(0,Z.K)(this.handlerError))}postTest(){return this.http.post(this.postUrl,{name:"helei",age:18},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})}postFile(t){let e=new FormData;return e.append("value",t,"\u4e0a\u4f20\u6587\u4ef6"),this.http.post(this.postUrl,e,{withCredentials:!0,observe:"events",reportProgress:!0,headers:{"Content-Type":"multipart/form-data"}})}login(){return this.http.get(this.loginUrl,{withCredentials:!0,observe:"events",reportProgress:!0,headers:{"Content-Type":"multipart/form-data"}})}loginout(){return this.http.get(this.loginoutUrl,{withCredentials:!0,observe:"events",reportProgress:!0,headers:{"Content-Type":"multipart/form-data"}})}}return t.\u0275fac=function(e){return new(e||t)(b.LFG(U.eN),b.LFG(w.N))},t.\u0275prov=b.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const x=[{path:"",component:(()=>{class t{constructor(t){this.$http=t,this.search$=new i.xQ,this.width="0%",this.fileControl=new f.NI,this.$http.getConfig().pipe((0,n.g)(2e3)).subscribe(t=>{this.config={age:t.age,date:t.date,heroesUrl:t.heroesUrl,name:t.name,textfile:t.textfile}}),this.$http.getConfigResponse().subscribe(t=>{})}ngOnInit(){this.search$.pipe(function(t,e=l.P){return s=>s.lift(new h(t,e))}(500),t=>t.lift(new p(void 0,void 0)),(0,g.b)(t=>{console.log(t)})).subscribe()}clickHandler(){this.$http.getConfigResponse().subscribe(t=>{})}fileHandler(t){var e,s;console.log(null===(e=t.files)||void 0===e?void 0:e.item(0)),this.$http.postFile(null===(s=t.files)||void 0===s?void 0:s.item(0)).pipe((0,g.b)(t=>{var e;1==t.type&&(this.width=t.loaded/(null!==(e=t.total)&&void 0!==e?e:0)*100+"%")})).subscribe()}search(t){this.search$.next(t.target.value)}login(){this.$http.login().subscribe()}loginout(){this.$http.loginout().subscribe()}}return t.\u0275fac=function(e){return new(e||t)(b.Y36(k))},t.\u0275cmp=b.Xpm({type:t,selectors:[["app-http"]],decls:35,vars:7,consts:function(){let t,e,s;return t="\u4F60\u597D i18n !",e="\u6211\u4E0D\u4F1A\u751F\u6210\u4E00\u4E2A\u5143\u7D20",s="\u5B89\u53E4\u62C9\u6807\u5FD7",[[3,"click"],["type","file","name","file","id","file",3,"formControl"],["inp",""],[1,"box"],[1,"progress"],["type","text","placeholder","search",3,"keyup"],t,e,["src","","title",s]]},template:function(t,e){if(1&t){const t=b.EpF();b.TgZ(0,"h2"),b._uU(1,"http works!"),b.qZA(),b.TgZ(2,"h3"),b._uU(3),b.qZA(),b.TgZ(4,"div"),b._uU(5,"\u767b\u5f55: "),b.TgZ(6,"button",0),b.NdJ("click",function(){return e.login()}),b._uU(7,"\u767b\u5f55"),b.qZA(),b.qZA(),b.TgZ(8,"div"),b._uU(9,"\u767b\u51fa: "),b.TgZ(10,"button",0),b.NdJ("click",function(){return e.loginout()}),b._uU(11,"\u767b\u51fa"),b.qZA(),b.qZA(),b.TgZ(12,"button",0),b.NdJ("click",function(){return e.clickHandler()}),b._uU(13,"\u53d1\u9001\u8bf7\u6c42"),b.qZA(),b._UZ(14,"input",1,2),b.TgZ(16,"button",0),b.NdJ("click",function(){b.CHM(t);const s=b.MAs(15);return e.fileHandler(s)}),b._uU(17,"\u4e0a\u4f20\u6587\u4ef6"),b.qZA(),b._UZ(18,"hr"),b.TgZ(19,"div",3),b._UZ(20,"div",4),b.qZA(),b._UZ(21,"hr"),b._uU(22,"\n\u67e5\u8be2\u6846: "),b.TgZ(23,"input",5),b.NdJ("keyup",function(t){return e.search(t)}),b.qZA(),b.TgZ(24,"div"),b.TgZ(25,"h4"),b._uU(26,"\u672c\u5730\u5316"),b.qZA(),b.TgZ(27,"p"),b._uU(28),b.ALo(29,"currency"),b.qZA(),b.TgZ(30,"h1"),b.SDv(31,6),b.qZA(),b.ynx(32),b.SDv(33,7),b.BQk(),b._UZ(34,"img",8),b.qZA()}2&t&&(b.xp6(3),b.hij(" ",e.config,"\n"),b.xp6(11),b.Q6J("formControl",e.fileControl),b.xp6(6),b.Udp("width",e.width),b.xp6(8),b.hij("A: ",b.lcZ(29,5,18.8),""))},directives:[f.Fj,f.JJ,f.oH],pipes:[r.H9],styles:[".box[_ngcontent-%COMP%]{width:100px;height:8px;border:2px solid #6060d3;border-radius:3px;text-align:center;position:relative}.progress[_ngcontent-%COMP%]{width:50%;background-color:cyan;height:100%}"]}),t})()}];let _=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.oAB({type:t}),t.\u0275inj=b.cJS({imports:[[o.Bz.forChild(x)],o.Bz]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.oAB({type:t}),t.\u0275inj=b.cJS({providers:[[w.N]],imports:[[r.ez,f.UX,f.u5,_,U.JF,U.PD.withOptions({cookieName:"My-Xsrf-Cookie",headerName:"My-Xsrf-Header"})]]}),t})()}}]);