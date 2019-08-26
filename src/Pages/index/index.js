import _ from 'lodash';
import '../../common/css/common.scss'
import "./index.scss"
import indexvue from "./index.vue"
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button'); //新建一个button对象

    element.innerHTML = _.join(['Helloindexhot92', 'webpack'], ' '); //要用到lodash的语法

    btn.innerHTML = 'Click me and check the console!';
    //btn.onclick = printMe; //button触发的事件是引用的print.js暴露的事件

    element.appendChild(btn); //把button对象插入div中

    return element;
}

document.body.appendChild(component());

import Vue from "vue"
import App from './index.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
////
class PriorityQueue{
	constructor(){
		this.q=[];
	}
	add(a){
		this.q.push(a);
	}
}
let p = new PriorityQueue();

console.log(p);
p.add(1);
