学习笔记

目的： javascript如何从最小单位构建一个完整的语言。

表达式

- Atom 
- Expression
- Statement
- Structure
- Program/Module



**Atom** 

grammar:
- 语法树与运算符优先级的关系
- 运算符左值和右值的区别

runtime:
- 类型转换
- 引用类型

**Member**
- a.b
- a[b]
- foo`string`
- super.b
- super['b']
- new.target
- new Foo()

**New**
- new Foo
>  example: new a()()   , new new a()  

**Reference**
- Object
- Key (string / Symbol)


**Expressions**
- Call
    - foo()
    - super()
    - foo()['b']
    - foo().b
    - foo()`abc`
> example ： new a()['b']


Left Handside 根据能否放在等式左边来区分，js中不能放在等式左侧的exporessions 都为Right Handside 


