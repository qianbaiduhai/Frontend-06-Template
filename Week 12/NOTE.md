学习笔记

CSS 排版三代排版技术：

1.  正常流
2.  flex
3.  grid
4.  houdini

CSS 排版，两样：盒和文字正常流

1. 收集盒和文字进行
2. 计算盒在行中的排布
3. 计算行的排布

-   IFC：从左往后，文字和 inline-box
-   BFC：从上到下，line-box 和 block-level-box 只有 BFC 会产生边距折叠 (margin collpose)
-   Block Container：所有能够容纳不是特殊 display 的
    block 、inline-block 、table-cell 、flex item 、grid cell 、table-caption
