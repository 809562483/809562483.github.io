import { Injectable } from "@angular/core"

/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-08-02 15:34:14
 * @LastEditors: Observer
 * @LastEditTime: 2021-08-02 16:04:19
 */
@Injectable()
export class Service1{
    name = "helei"
  }
  @Injectable()
  export class Service2{
    age = 18
  }
//   @Injectable({
//     providedIn:"root",
//     useFactory:(s1:Service1,s2:Service2)=>{return new UserService(s1.name,s2.age)},
//     deps:[Service1,Service2]
//   })
  export class UserService{
    constructor(private name:string,private age:number){

    }
    show(){
        console.log(`name:${this.name},age:${this.age}`)
    }
  }
  export const UserServiceProvider = {
      provide:UserService,
      useFactory:(s1:Service1,s2:Service2)=>{return new UserService(s1.name,s2.age)},
      deps:[Service1,Service2]
  }