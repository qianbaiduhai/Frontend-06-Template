学习笔记

重学 CSS

知识并不是总有人给你总结了一本书，或者有个地方包含了所有的知识，它会分布在不同的各种各样的地方。

第一步，需要找一条线索。

从语法入手。css2.1 比较完整，所有内容在一份里。

在https://www.w3.org/TR/?tag=css 页面爬取。

```js
JSON.stringify(
    Array.prototype.slice
        .call(document.querySelector('#container').children)
        .filter((e) => e.getAttribute('data-tag').match(/css/))
        .map((e) => ({ name: e.children[1].innerText, url: e.children[1].children[0].href }))
);
```

分析网页的 html 结构，进而用程序爬取需要的内容。
超链接的透明度会导致渲染变慢，根据这个可以知道用户浏览过页面的什么链接。
