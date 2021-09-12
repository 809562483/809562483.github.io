/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-07-02 11:21:21
 * @LastEditors: Observer
 * @LastEditTime: 2021-07-02 11:26:40
 */
import {Injectable} from "@angular/core"

@Injectable({
    providedIn:"root"
})
export class Logger{
    write(msg:string){
        console.warn(msg)
    }
}
