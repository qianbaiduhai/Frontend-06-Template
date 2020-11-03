# javascript 基本类型

**基础**

7 种基本类型：null、undefined、string、boolean、number、symbol、object、bigInt

-   为什么有的编程规范要求用 `void 0` 而不是 `undefined`

> 设计失误， undefined 不是关键字，可以被修改，为了避免无意篡改，建议使用 void 0
> 最新 es6 规范，全局的 undefined 可以进行赋值，但是其还是 undefined，不能修改。
> 块级作用域 undefined 需要重新声明，之后赋值才会改变。

```js
var undefined = 1;
console.log(undefined); // undefined
{
    let undefined = 2;
    console.log(undefined); // 2
}
```

-   字符串有最大长度吗？

> JS 字符串的长度受到下标限制。理论最大长度是 2^53-1（即 js 中可表达的最大安全整数）。
> 目前来说是不可能达到，计算机的运行内存不足以支撑。

-   装箱转换

**每一种基本类型 Number、String、Boolean、Symbol 在对象中都有对应的类，所谓装箱转换，正是把基本类型转换为对应的对象，它是类型转换中一种相当重要的种类。**

```js
const tmp = {
    valueOf: () => {
        return 'valueOf';
    },
    toString: () => {
        return 'toString';
    },
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return 42;
        }
        return 'toPrimitive';
    },
};

String(tmp); // toPrimitive

tmp + ''; // toPrimitive
```

js 对象的两大属性

-   数据属性（value, writable, enumberable, configurable）
-   访问器属性 (getter, setter, enumberable, configurable)

```js
var o = { a: 1 };
Object.defineProperty(o, 'b', { value: 2, writable: false, enumerable: false, configurable: true });
//a和b都是数据属性，但特征值变化了
Object.getOwnPropertyDescriptor(o, 'a'); // {value: 1, writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(o, 'b'); // {value: 2, writable: false, enumerable: false, configurable: true}
o.b = 3;
console.log(o.b); // 2

var o = {
    get a() {
        return 1;
    },
};

console.log(o.a); // 1

var i = {
    a: '',
    set setA(val) {
        console.log(val);
        this.a = 1;
    },
};

i.a = 2;
console.log('test', i.a);
```

原型系统

-   所有对象都有私有字段[[prototype]]
