学习笔记

-   对去前端来说，1W 个 DOM 算比较多了
-   因此每次重置不能简单粗暴直接把 container 里的内容直接清空，应该是更改 class
-   更改 container.children 获取的是类数组元素，不能直接用数组的方法，需要先转换
-   选择合适的数据结构优化代码

---

函数式编程特点：

-   函数是一等公民：函数和其他数据类型一样，可以赋值，传递，入参，返回。
-   声名式编程：看名字就知道干啥，不需要关注内部实现
-   惰性执行：只在需要的时候执行
-   **无状态**：给定相同的输入，必定输出相同的结果
-   **数据不可变**：所有的数据都是不可变的，这意味着如果你想修改一个对象，那你应该创建一个新的对象用来修改，而不是修改已有的对象
-   没有副作用
    > 副作用的含义是：在完成函数主要功能之外完成的其他副要功能。在函数中最主要的功能是根据输入返回结果，而在函数中最常见的副作用就是随意操纵外部变量。由于 JS 中对象传递的是引用地址，哪怕用 const 关键词声明对象，它依旧是可以变的。而正是这个“漏洞”让我们有机会随意修改对象。

纯函数意义： 便于测试和优化、可缓存性、自文档化、更少的 bug。

---

2020.11.06
温习了一遍函数式编程，发现地图寻路里写的函数存在副作用。需要优化。
保证函数没有副作用，一来能保证数据的不可变性，二来能避免很多因为共享状态带来的问题。当一个人维护代码时候可能还不明显，但随着项目的迭代，项目参与人数增加，大家对同一变量的依赖和引用越来越多，这种问题会越来越严重。最终可能连维护者自己都不清楚变量到底是在哪里被改变而产生 Bug。
