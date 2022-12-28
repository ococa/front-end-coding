面试题总结

1. useCallback useMemo区别

2. 不可变数据

3. useRef 保存和 render无关的数据（state）

4. 自定义hook ahook源码

5. jenkins 部署流程

7. micro task 和 macro task 每次队列取出来的时候是一次全部取还是一个一个取

8. ts 给三方包申明类型 extends 或者 interface 合并

9. egg loader ？

10. fiber指的是dom diff过程么 还是 更新过程

11. 数据看板 如何性能优化

12. redux路由参数保留， 页面销毁之后 报错页面的位置

13. vue基本用法
14. vue to react

15. 前端鉴权 cookie和session， jwt oauth
17. login登录中间件
// oauth 和 jwt

16. commonjs import

18. https和 http的优缺点

算法：
1. 取出数组中前n大的树


coding
```
var arrays = [[1,2,3],['a','b'],['你','我'], ['x']];
console.log(getArrays(arrays))
//["1a你", "1a我", "1b你", "1b我", "2a你", "2a我", "2b你", "2b我", "3a你", "3a我", "3b你", "3b我"]

function getArrays(arrays){
	var arr = [""];
	arrays.forEach((item,idx) => {
		arr = getValues(arr,item);
	})
	return arr;
}

function getValues(arr1,arr2){
	var arr = [];
	arr1.forEach((item,index) => {
		arr2.forEach((opt,idx) => {
			arr.push(item+opt);
		})
	})
	return arr;
}

[true, true]
```
