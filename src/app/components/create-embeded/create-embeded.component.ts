import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-create-embeded',
  templateUrl: './create-embeded.component.html',
  styleUrls: ['./create-embeded.component.less']
})
export class CreateEmbededComponent implements OnInit {
  @ViewChild("tpl") tpl!:TemplateRef<any>
  @ViewChild("con",{read:ViewContainerRef}) con!:ViewContainerRef
  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewChecked(){

  }
  render(){
    // console.log(this.con)
    this.con.createEmbeddedView(this.tpl)
  }
}
