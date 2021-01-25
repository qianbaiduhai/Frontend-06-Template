学习笔记

**DOM API**

| node            | element                |
| --------------- | ---------------------- |
| parentNode      | parentElement          |
| childrenNodes   | Children               |
| firstChild      | firstElementChild      |
| lastChild       | lastElementChild       |
| nextChild       | nextElementChild       |
| previousSibling | previousElementSibling |



- appendChild
- insertBefore
- removeChild
- replaceChild

**advanced**

```

compareDocumentPosition

containers

isEqualNode

isSameNode

cloneNode
```



**Range**

一种更为抽象的浏览器 DOM 操作 API，操作粒度更细，可以对 DOM 节点做批量剪切和粘贴的操作。

> 在 VSCode 插件开发中有关于 DOM 操作基本都是依靠 VSCode 暴露出的 Range API 来进行的，比如可以进行多行选择等。





**Event**

事件冒泡，事件捕获。

如果 `触发事件的节点` 既注册了冒泡事件处理函数又注册了捕获事件处理函数，则该节点注册的事件处理函数按照注册顺序执行，因为当前节点处于 `target phase`。而其外部的节点注册函数依然符合先捕获后冒泡的顺序执行。





**CSSOM**

- CSSStyleRule
- CssCharseRule
- CSSImportRule
- CSSMediaRule
- CSSFontFaceRule
- CSSPageRule
- CSSNamespaceRule
- CSSKeyframesRule
- CSSSuportsRule

**getComputedStyle**