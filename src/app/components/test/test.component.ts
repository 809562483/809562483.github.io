/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-07-12 09:18:34
 * @LastEditors: Observer
 * @LastEditTime: 2021-07-12 09:24:19
 */
import {Component, Input} from "@angular/core"


@Component({
    selector:"test-component",
    templateUrl:"test.component.html",
    styleUrls:["test.component.less"]

})
export class TestComponent{
    
    @Input() value:any

    showType(){
      console.log(this.value,":"+typeof this.value)
    }

}
