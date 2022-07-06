import { Component } from "@angular/core";
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent{
  items: any
  test = 'ddd'
  data = {
    items: '222'
  }

  constructor(){

  }

  ngOnInit(){
    this.items = document.getElementsByClassName('item') // 返回NodeList 对象，表示指定类名的元素集合。元素在集合中的顺序以其在代码中的出现次序排序。
    let self = this
    for(let i = 0; i<this.items.length;i++){
      this.items[i].onclick = function (){
        self.items[i].style.background = 'red'
      }.bind(self)
    }

    // let a = 0;
    // a = 1;
  }

  /**箭头函数没有arguments，它的arguments指向它所在作用域下的arguments */
  arrowFn(){
    // let fn = (...testRest: any) => {
    //   console.log('testRest :>> ', testRest);
    //   console.log('arguments--------', arguments)
    // }
    // fn(1,2,3)

    let fn1 = function(...tags: any){
      let arrow = (...arrowTags: any) => {
        console.log('arguments--------', arguments) // 1,2,3 是指它所在作用域下的arguments
      }
      arrow(4,5,6)
    }
    fn1(1,2,3)

    // let fn2 = function(a: any, b: any, c: any){
    //   console.log('arguments--------- :>> ', arguments);
    // }
    // fn2(1,2,3)
  }

  /**箭头函数实践 */
  practiceFn(){
    let practiceDom = document.getElementById('practice')
    // practiceDom.addEventListener('click', function(){

    // })
  }

}
