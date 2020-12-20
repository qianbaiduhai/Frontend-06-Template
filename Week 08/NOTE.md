学习笔记

**浏览器工作原理相关**

url -http-> html -parse-> dom -css computing-> dom with css -layout-> dom with position -render-> bitmap

**有限状态机处理字符串**

有限状态机
- moore :每个机器都有确定的下一个状态
- mealy :每个机器根据输入决定下一个状态

>每一个状态都是一个函数；
>这个函数如果满足这个状态就继续调用下一个状态的函数；
>当前函数如果不能满足查找的状态，就返回开始函数；
>如果是一直满足，则最后一个函数的状态设定为特定值，并且由最初函数return；
>适合用函数式编程，无副作用


**http七层协议**

应用层/表示层/会话层: HTTP[require("http")]
传输层:  TCP[require('net')]
网络层:  Internet
数据链路/物理层: 4G/5G/WI-FI

| 基础概念        | TCP 双通道协议 |
| --- | ---   |
| 流              | 无单位的数据传输形式 能保证数据的顺序 |
| 端口            | 软件从网卡那数据的位置对应端口 TCP协议的概念 |
| require（net）  | TCP协议node对应的库 |
| 包              | TCP协议传输就是使用包的概念，可大可小，取决于网络设备 |
| IP地址          | 更具地址去找到这个包应该从哪到哪 网络连接很复杂会用到大型的路由节点  |
| libnet/libpcap  | IP协议底层库 c++对应库 分别是 发包/抓包 |

http协议: 文本型协议，全部是字符串解析
构成: 
- Request line: [method] [path] [http版本]
- headers: key和value键值对 (最后以空白行结束)
- body: Content-Type决定(HTTP 的请求行、请求头、请求体之间由一个 CRLF 分隔,\r\n)
