import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
  // pure:false
})
export class MypipePipe implements PipeTransform {
  //纯管道只检测输入参数是否变更（字面量 or 引用对象的地址）,如果组件变更检测的时候发型参数未变更，则不进行数据更新
  transform(all:any[]){
    return all.filter(e=>e.sex==1)
  }

}
