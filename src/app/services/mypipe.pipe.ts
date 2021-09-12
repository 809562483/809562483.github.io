import {Pipe,PipeTransform} from '@angular/core'


@Pipe({
   name:"toUpper"
})
export class myPipe implements PipeTransform{
      transform(e:string){
          return e.toUpperCase()
      }
}