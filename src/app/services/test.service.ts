/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-07-12 09:37:35
 * @LastEditors: Observer
 * @LastEditTime: 2021-08-05 16:06:07
 */
import {Injectable} from "@angular/core"

export class A{
  say(){
    console.log("I am A")
  }
}
@Injectable()
export class TestService{
  constructor(public a:A){
    a.say()
  }
    addItem(){
        alert("物品添加成功")
    }

}
@Injectable()
export class BetterService {
  constructor(){

    console.log("I am BetterService")
  }
}

@Injectable({
  providedIn:"root"
})
export class NoProviderService {
  constructor(){

    console.log("I am NoProviderService ")
  }
}