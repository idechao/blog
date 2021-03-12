# Electron

## 引入node模块

使用
```
var fs = require('fs')
```

生成新的BrowserWindow的时候，需要设置两个对应的属性：

```
webPreferences: {
  nodeIntegration: true,
  contextIsolation: false
}
```

## remote模块
remote在新版本被默认禁止了，可以在配置中打开：

```
webPreferences: {
  enableRemoteModule: true  // 使用remote模块
}
```

不过，这样也是会有警告：
```
The remote module is deprecated.
```

参照它的提示来的话，通过安装单独的模块 electron/remote 来配置。

```
npm install --save @electron/remote
```
```
// in the main process:
require('@electron/remote/main').initialize()
```
```
// in the renderer process:

// Before
const { BrowserWindow } = require('electron').remote

// After
const { BrowserWindow } = require('@electron/remote')
```

参考：https://github.com/electron/remote

## 生成渲染窗口
Cannot read property ‘BrowserWindow‘ of undefined

在Electron 10.x中，enableRemoteModule的默认值为false，也就是默认情况下是不支持使用remote模块的，因此使用remote模块的应用程序需要将enableRemoteModule显式设置为true。

```
webPreferences: {     
	nodeIntegration: true,   // 集成node环境
	enableRemoteModule: true   // 使用remote模块
}
```

## 错误处理

### Electron Security Warning 

运行报如下警告：
```
Electron Security Warning (Insecure Content-Security-Policy) This renderer process has either no Content Security
```
可以直接在main文件上面，添加个忽略：

```
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
```