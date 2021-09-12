import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-children-by-viewchild',
  templateUrl: './control-children-by-viewchild.component.html',
  styleUrls: ['./control-children-by-viewchild.component.less']
})
export class ControlChildrenByViewchildComponent implements OnInit {
  timer = 0
  counts = 11
  msg = ""
  constructor() { }

  ngOnInit(): void {
    this.countDown()
  }
  ngOnDestroy(){
    //一定要销毁定时器
    this.clearTimer()
  }
  start(){
    this.countDown()
  }
  stop(){
    this.clearTimer()
    this.msg = `C4 timeout at ${this.counts} seconds`
  }
  private clearTimer(){
    clearInterval(this.timer)
  }
  private countDown(){
    this.timer = window.setInterval(()=>{
      this.counts--;
      if(this.counts===0){
          this.msg = "Boooooooooom!"
      }else{
        if(this.counts<0){
          this.counts = 10
        }
        this.msg = `C4 will Bomb after ${this.counts} seconds`
      }
    },1000)
  }

}
