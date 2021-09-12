/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-07-14 10:19:22
 * @LastEditors: Observer
 * @LastEditTime: 2021-07-14 10:33:27
 */
export class ShadowElement extends HTMLElement{
    constructor(){
        //对shadowdom元素的定义写在构造函数里
        super()
        //创建内部shadow节点，用于添加其他元素
        var shadowRoot = this.attachShadow({mode:'open'})
        //创建内部html元素
        let h3 = document.createElement("h3")
        //设置元素内容-class/textContent
        h3.setAttribute("class","main")
        h3.textContent = this.getAttribute("text")
        //创建style节点
        var style = document.createElement("style")
        style.textContent = `
        .main {
            color:red;
        }
        `
        //附着元素
        shadowRoot.appendChild(style)
        shadowRoot.appendChild(h3)
    }
}