# 做过的项目
项目
1. lp复用 授权复杂（）

2. 配网 需求多变（海内外区别，数量增减）
3. 面板 接口复杂 （接口聚合）
4. 猫精融合 系统设计，
	1. 接口缓存 
	2. （跨项目交互数据）https://www.npmjs.com/package/event-emitter
5. 运营中心数据看板 portal 中间件白名单


1. 
当前登录账号已经授权，或者当前登录账号是主账号 
当做是项目owner -> assumeRole() 建立连接,获取token -> rpcClient -> POPRequest(action)


当前登录账号是被授权账号，鉴权pk 
-> loginTenantId -> config里面key + id 建立请求 -> rpcClient -> POPRequestCompatible(action + 'Biz')

扩展 cookie session jwt oauth2


2. 
diamond保存配网
海内外区别。
不同品类区别()
优点： 可配置化实现，不发布代码 即可完成更新


3. 
createPanel

4. 猫精融合项目
 1. event-emitter实现跨引用交互
 性能优化
 2. 接口缓存	
 通过url json.stringify(params)为key，缓存请求和 请求response
 3. react code splitting

5. 
begg 中间件
1. errorhandler
2. 白名单。

6. bone-kit-console
脚手架
vue-to-react

7. loader 主题色编译

8. ilopdev webnext 前端架构，
扩展：详细了解微前端部分

9. node服务线上容灾 挂了怎么办


