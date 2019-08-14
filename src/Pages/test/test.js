import _ from 'lodash';
import "./test.scss"
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button'); //新建一个button对象

    element.innerHTML = _.join(['Hellotest', 'webpack'], ' '); //要用到lodash的语法

    btn.innerHTML = 'Click me and check the console!';
    //btn.onclick = printMe; //button触发的事件是引用的print.js暴露的事件

    element.appendChild(btn); //把button对象插入div中

    return element;
}

document.body.appendChild(component());

function* kk() {
    yield '1';
    yield '2';
    return 3;
}
var k = kk();

console.log(k.next().value);
console.log(k.next().value);

let t = new Promise((s,f)=>{
	console.log("promise 定义2秒后打印");
	setTimeout(()=>{
		s();
	},2000)
});
console.log("3秒后再then");
setTimeout(()=>{
	console.log("3秒后");
	t.then(()=>{console.log("2秒后promise打印")})
},3000)
