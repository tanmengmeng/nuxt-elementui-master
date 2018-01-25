# api设置

目前封装http操作在http.js中
https 挂载所有的方法到vue上
其他文件对应页面配置
common放了公共的，需要特殊处理的登录，登出，获取菜单 需验证是否能得到服务器session

**使用方式，page页面中vue.$http.文件名.方法.**