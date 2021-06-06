# 事件循环

## 事件
当按下键盘->键盘会触发电流->电流代表01->表示一个字母->
传给操作系统->操作系统(通过事件)通知浏览器-> 浏览器会将数字展示到输入框
 
## 浏览器事件循环（c++实现）
1. 执行js。
2. 遇见异步任务，放入任务队列，交给浏览器（c++）执行。
3. 继续执行js。
### 总结
1. 微任务
2. 宏任务执行完一个 去执行所有的微任务，微任务全部执行完去看下一个宏任务

## nodejs 事件循环
```
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```
1. 第一步初始化eventLoop，执行js代码
   （When Node.js starts, it initializes the event loop, processes the provided input script）
   
### timer阶段
如果有setTimeout代码 放入timers队列并继续下一步

### pending cb 
等待callback

### prepare
准备阶段

### poll阶段
执行完代码后，js引擎停留在这里，轮询 如果有callback，到期的timer，或者immediate任务 继续下一步骤

### check阶段
简单 setImmediate队列是否有任务需要执行

### close阶段

### 重要 next不属于eventLoop
nextTick

#### 面试题
1. setImmediate(fn)和seTimeOut(fn, 0)哪个先执行
   - 如果是初始化阶段。 不确定。
   - 如果是setTimeout(() => {
         setImmediate(fn);
         seTimeOut(fn, 0)
      }, 1000)
      setImmediate先。
   


