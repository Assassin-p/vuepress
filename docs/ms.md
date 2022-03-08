
---
# 高频面试题



[TOC]

### 一、HTML

##### 1、你都做过哪些兼容性问题？

**HTML兼容性：**

h5新标签只能兼容到ie9，如果想要兼容ie低版本浏览器，需要引入html5shiv.js文件，其cdn写法如下：

```
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
```



**CSS兼容性：**

1.1、媒体查询兼容性，ie9以下不支持媒体查询，需要引入response.js文件，其cdn写法如下：

```
<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
```

1.2、CSS Hack：

1.2.1、属性前缀：例如 IE6能识别下划线和星号，IE7能识别星号，但不能识别下划线，IE6~IE10都认识"\9"，但firefox前述三个都不能认识。

```
.red { 
	_color: red; /* ie6 */
	*color: red; /* ie7 */
	color: red\9; /* ie8/9/10 */
}
```

1.2.2、选择器前缀：例如 IE6能识别 * html .class{}，IE7能识别 +html .class{}或者*:first-child+html .class{}。

```
*.red {} /* ie6 */
+.red {} /* ie7 */
```

1.2.3、条件注释：

针对所有IE(注：IE10+已经不再支持条件注释)：

```
<!--[if IE]>IE浏览器显示的内容 <![endif]-->
```

针对IE6及以下版本： 

```
<!--[if lt IE 6]>只在IE6-显示的内容 <![endif]-->
```

这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都会生效。

1.3、厂商前缀：谷歌-webkit-、火狐-moz-、IE-ms-、欧朋-o-

1.4、其它兼容性：

1.4.1、ie老版本浮动造成的双边距问题：display:inline;

1.4.2、图片间隙：父盒子设置font-size: 0; 或者图片设置display: block;

1.4.3、块元素默认高度：overflow: hidden;



**JavaScript兼容性：**一般使用渐进增强和优雅降级的方式来解决兼容性问题。

```
// 优雅降级
var xhr = null;
if(XMLHttpRequest){
	xhr = new XMLHttpRequest();
}else{
	xhr = new ActiveXObject('Microsoft.XMLHTTP');
}

// 渐进增强
// 前边实现上传文件的基本功能
// 后边再判断如果支持拖拽事件，就实现拖拽上传
```



------

##### 2、如何提高页面性能？

2.1、图片压缩、合并（精灵图）、使用字体图标代替小图片、使用base64、图片懒加载

2.2、css、js的压缩、封装复用

2.3、减少重排操作，例如使用transform书写动画效果，在for循环结束后再去操作dom等

2.3、使用CDN网络托管

2.4、数据懒加载、数据按需加载（上拉加载）、分页

2.5、路由懒加载

2.6、利用缓存来缓存文件

2.7、频繁触发的事件进行防抖和节流

2.8、异步加载

2.9、减少闭包，递归优化，使用高效的算法

2.10、webpack优化：去除无用代码treeShaking、组件按需加载、使用chunck、模板预编译等

2.11、字库用gb2312不要utf-8，一个汉字少一个字节



------


------

### 三、JavaScript

##### 1、call、apply、bind的区别

这三个都是用来定义上下文的，call、apply会指定上下文并执行函数；而bind终身定 死上下文但是不执行函数，并返回新的函数。 其中call和apply传入参数的形式有别，call是单独罗列，逗号隔开参数；apply是数 组。 函数.call(上下文对象，参数，参数，参数); 函数.apply(上下文对象，[参数，参数，参数]);

```
var obj = {
 a: 10
}

function fun(b, c){
 console.log(this.a + b + c);
}

fun.call(obj, 3, 4);
fun.apply(obj, [3, 4]);
fun = fun.bind(obj); // 返回新的函数
fun(3,4);
```



------

##### 2、数据类型有哪些

基本类型：数字number、字符串string、布尔boolean、undefined、null、symbol

引用类型：数组array、函数function、对象object



------

##### 3、如何检测数据类型

typeof  能够检测：数字、字符串、布尔、undefined、symbol、function

instanceof  能够检测：数组

Object.prototype.toString.call() 万能法



------

##### 4、各语句的区别

4.1、for和for...in和for...of的区别

for循环，遍历整个数组

for...in加强循环，不光可以遍历数组，还可以遍历对象和其原型上的方法

for...of遍历数组和可枚举的对象

4.2、switch和if的区别

switch用于判断精准的值

if用于判断值的范围

4.3、while和do...while的区别

while当符合条件时则执行

do...while先执行一次，然后再判断是否符合条件，比while要多执行一次

4.4、break和continue的区别

break是跳出当前循环并终止循环

continue是跳出当前循环并执行下一次循环



------

##### 5、闭包

闭包就是函数能够记忆住当初定义时候的作用域，不管函数到哪里执行了，永远都能够 记住那个作用域，并且会遮蔽新作用域的变量。可预测状态容器；实现模块化，实现变量的私有封装；可以实现迭代器。 闭包缺点：1.闭包有一个非常严重的问题，那就是内存浪费问题，这个内存浪费不仅仅 因为它常驻内存，更重要的是，对闭包的使用不当的话会造成无效内存的产生；2.性能问题 使用闭包时，会涉及到跨作用域访问，每次访问都会导致性能损失。 因此在脚本中，最好小心使用闭包，它同时会涉及到内存和速度问题。不过我们可以通过把跨作用域变量存储在局部变量中，然后直接访问局部变量，来减轻对执行速度的影响。

```
      function foo(){
        var a = 0;
        function f(){
          a++;
          return a;
        }
        return f;
      }
      var res = foo();
      res(); 
      res();
      res();
      console.log(res()); // 4 a的值被存储在内存中不会被释放掉
```



------

##### 6、原型和原型链

原型：每一个引用类型都有一个隐式原型__ proto __ ，每一个函数都有一个显示原型prototype，该属性指向它的原型对象。

