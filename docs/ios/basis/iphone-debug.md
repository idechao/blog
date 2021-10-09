# iphone无证书真机调试

当前环境：Xcode Version 12.5.1 (12E507)

## 创建证书

我为了测试流程，重新注册了apple id，在xcode中登录，选择 `Manage Certificates `

点击+号，新建 `Apple Development`

## 工程配置

`Team`选择刚新加的`Personal Team`，这时候，`Build Settings`里的`Code Signing Identity`自动变成`Applee Development`，就用这个就好的

需改`Bundle Identifier`，这里主要不能和别人一样的，所以如果是本地测试，那就长一点好了

<img src='https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d845f08ce3bc4ad9a621788926910767~tplv-k3u1fbpfcp-watermark.awebp?'>

## 信任开发者

配置好直接运行，会有个提示，这时候需要到手机描述文件里，信任证书，然后在重新运行。