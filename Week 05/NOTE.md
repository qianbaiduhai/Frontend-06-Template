学习笔记

**proxy**
> 用于定义基本操作的自定义行为
> 如：属性查找、赋值、枚举、函数调用等

专门为顶层库设计的。不建议在生成环境使用，因为这样会让行为的预测性变差。


**reativity**
核心实现点：读取收集依赖、设置触发依赖。
关键优化点：如何避免重复收集依赖、如何按需触发依赖。

reactive 主要做了三件事
* 利用缓存可以避免某些引用被重复代理。
* 赋值时对该对象属性上的订阅者队列进行逐个“通知”。
* 获取时返回被劫持过的对象，确保返回的对象都是响应式的。

**draggable**
当move事件挂载在drag节点上，拖动过快时容易脱离挂掉。应该挂载在document上。

---
参考资料：
- [MDN中的Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [vue-next的reactivity包github仓库](https://github.com/vuejs/vue-next/tree/master/packages/reactivity#readme)
- [MDN中的Range](https://developer.mozilla.org/zh-CN/docs/Web/API/Range)
