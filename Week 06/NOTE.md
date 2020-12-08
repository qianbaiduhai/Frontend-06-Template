学习笔记
---

**语言按语法分类**

- 非形式语言
  - 中文，英文
- 形式语言（乔姆斯基谱系）
  - 0型 无限制文法
  - 1型 上下文相关文法
  - 2型 上下文无关文法
  - 3型 正则文法

> 形式语言与非形式语言，简单理解前者就是自然语言，后者就是计算机语言

> 上面的形式语言是一个包含关系，一个上下文相关文法，也是0型的无限制文法


**产生式（巴科斯-诺尔范式-BNF）**

- 用尖括号括起来的名称来表示语法结构名
- 语法结构分成基础结构和需要用其他语法结构定义的复合结构
  - 基础结构称终结符
  - 复合结构称非终结符
- 引号和中间的字符表示终结符
- 可以有括号
- * 表示重复多次
- | 表示或
- + 表示至少一次



**带括号的四则运算**
```
<MultiplicativeExpression> ::= <Number> | 
    <MultiplicativeExpression> "*" <Number> |
    <MultiplicativeExpression> "/" <Number> |

<AddtiveExpression> ::= <MultiplicativeExpression> |
    <AddtiveExpression> "+" <MultiplicativeExpression> | 
    <AddtiveExpression> "-" <MultiplicativeExpression> |

<BracketsExpression> ::= "(" <AddtiveExpression> ")" 
```
可以尝试去观看规范的BNF
[ECMA-262](https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)

**图灵完备性**
跟图灵机等效的都是叫具有图灵完备性，这个定义其实比较模糊，如果从比较感性的方法理解，就是一切可计算的问题都能计算出来就叫图灵机。
今天几乎所有的编程语言都是具有图灵完备的。实现图灵机完备性的方式有三种：

- 命令式 - 图灵机
  - goto
  - if和while
- 声明式 -- lambda
  - 递归

**类型系统**
对于编程语言还可以从类型的角度去区分。类型系统下又有下面几个概念：

- 动态类型系统和静态类型系统
> 动态就是讲的运行在用户的设备 / 服务器上，也就是产品已经在实际运行，也叫 Runtime。
> 静态对应的就是在程序员的设备上（在写代码的时候），也就是产品还在开发阶段，也叫 Compiletime。

- 强类型和弱类型
> 强类型就是无隐式转换，对应的弱类型就是有隐式转换。比如可以将数字与字符串相加 0 + 'ab'，数字 0 会被隐式转换为字符串
- 复合类型
> 复合类型有两种形式：「结构体」和「函数签名」。
> 结构体其实就是对象，每一个属性都可以有一个类型，是一个键值对。
> 函数签名就是由「函数参数」和「返回值」组成的。如 (T1, T2) => T3，这三种类型 T1、T2、T3 组成了一个函数签名，三个类型的函数类型不对、位置不对、参数的数量不对，都会使得函数签名的不匹配。
- 子类型
> 当类型系统有了继承之后，就会变得非常复杂。就会产生「逆变」和「协变」的概念。
> 简单来说就是，协变就是但凡能用 Parent 的地方就能用 Child。逆变就是但凡能用 Child 的地方也能用 Parent。

**String**
- ASCII
- Unicode
- UCS
- GB
  - GB2312
  - GBK(GB13000)
  - GB18030
- ISO-8859
- BIG5


```js
//将字符串格式化为UTF-8编码的字节
function str2UTF8(str, isGetBytes){
    var back = [];
    var byteSize = 0;
    for(let i = 0; i < str.length; i++){
        //charCodeAt() 方法可返回指定位置的字符的 Unicode 编码
        var code = str.charCodeAt(i);//获取Unicode值大小 25935
        /*英文占1个字符，汉字占2个字符*/
        /*UTF-8的编码结构长度是根据某单个字符的大小来决定长度有多少。*/
        
        //根据大小判断UTF8的长度 
        //[0,127] 
        if(0x00 <= code && code <= 0x7f){
            byteSize += 1;
            back.push(code); 
        }
        //[128, 2047]
        else if (0x80 <= code && code <= 0x7ff) {
            byteSize += 2;
            back.push((192 | (31 & (code >> 6))));
            back.push((128 | (63 & code)))
        }
        //[2048, 55295] || [57344, 65535]
        else if ((0x800 <= code && code <= 0xd7ff) 
              || (0xe000 <= code && code <= 0xffff)) {
            byteSize += 3;
            back.push((224 | (15 & (code >> 12))));
            back.push((128 | (63 & (code >> 6))));
            back.push((128 | (63 & code)))
        }
    }
    for (i = 0; i < back.length; i++) {
        back[i] &= 0xff;
        back[i] = back[i].toString(2);//转为二进制
    }
    if (isGetBytes) {
        return back
    }
    if (byteSize <= 0xff) {
        return [0, byteSize].concat(back);
    } else {
        return [byteSize >> 8, byteSize & 0xff].concat(back);
    }
}
console.log(strUTF('中'));//[0, 3, 230, 149, 143]
//前两位表示后面utf8字节的长度。因为长度为3，所以前两个字节为`0，3`
//内容为`230, 149, 143`转成16进制就是`0xe6,0x95,0x8f`

//简化
function stringUTF(str){
    var code = encodeURI(str);
    console.log(code); // => %E4%B8%AD
    var codeList = code.split('%');
    //parseInt(item,16) 将16进制的item转为10进制
    codeList = codeList.map(item => parseInt(item,16));
    //将10进制转为2进制
    codeList = codeList.map(item => item.toString(2));
    codeList.shift();
    return codeList; 
}
console.log(stringUTF('中'));
```


```js
class Dog{
    constructor(name, damage = 10){
        this.name = name;
        this.damage = damage;
    }
    bite(){
        return this.damage;
    }
}
class Human{
    constructor(name, lifeValue = 999){
        this.name = name;
        this.lifeValue = lifeValue;
        this.isAlive = this.lifeValue > 0;
    }
    hurt(damage){
        if(this.isAlive){
            this.lifeValue = this.lifeValue > damage ? this.lifeValue - damage : 0;
            this.isAlive = this.lifeValue > 0;
        }

        if(this.isAlive){
            return this.name  + "的生命值:" + this.lifeValue
        }else{
            return this.name + '战败! 恶狗获胜'
        }
    }
}

var human = new Human('Min');
var smallDog = new Dog('smallDog');

console.log(human.hurt(smallDog.bite()));
```
