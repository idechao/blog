# iphone无证书真机调试

当前环境：Xcode Version 12.5.1 (12E507)

## 创建证书

我为了测试流程，重新注册了apple id，在xcode中登录，选择 `Manage Certificates `

点击+号，新建 `Apple Development`

## 工程配置

`Team`选择刚新加的`Personal Team`，这时候，`Build Settings`里的`Code Signing Identity`自动变成`Applee Development`，就用这个就好的

需改`Bundle Identifier`，这里主要不能和别人一样的，所以如果是本地测试，那就长一点好了

<img src='https://upload-images.jianshu.io/upload_images/2204039-d3b06e28e4b96c34.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp'>

## 信任开发者

配置好直接运行，会有个提示，这时候需要到手机描述文件里，信任证书，然后在重新运行。