学习笔记

浏览器基础渲染流程

学习浏览器渲染，需要掌握状态机相关知识点。

状态机有

-   Moore 型：下一状态只由当前状态决定，即次态=f(现状，输入)，输出=f（现状）**输出只取决于当前状态的状态机**

-   Mealy 型：下一状态不但与当前状态有关，还与当前输入值有关，即次态=f(现状，输入)，输出=f（现状，输入）**输出不光取决于当前状态，还与输入有关系的状态机**

有限状态机

-   每一个状态都是一个机械

    -   在每一个机械里，都可以做计算、存储、输出……
    -   在所有的这些机械里接受的输入是一致的
    -   状态机的每一个机械本身是没有状态的，如果用函数表示，即是纯函数

-   每一个机械知道下一个状态

    -   每个机械都有确定的下一个状态（Moore）
    -   每一个机械根据输入决定下一个状态（Mealy ）

在一个字符串中找到固定字符

```js
function findStr1(str, code) {
    return str.includes(code);
}

function findStr2(str, code) {
    return str.indexOf(code) > -1;
}

function findStr3(str, code) {
    for (const c of str) {
        if (c === code) return true;
    }
    return false;
}
```
