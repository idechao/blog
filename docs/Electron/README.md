# Electron 入门

## 引入node模块

使用
```js
var fs = require('fs')
```

生成新的BrowserWindow的时候，需要设置两个对应的属性：

```js
webPreferences: {
  nodeIntegration: true,
  contextIsolation: false
}
```

## remote模块
remote在新版本被默认禁止了，可以在配置中打开：

```js
webPreferences: {
  enableRemoteModule: true  // 使用remote模块
}
```

不过，这样也是会有警告：
```js
The remote module is deprecated.
```

参照它的提示来的话，通过安装单独的模块 electron/remote 来配置。

```js
npm install --save @electron/remote
```
```js
// in the main process:
require('@electron/remote/main').initialize()
```
```js
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

```js
webPreferences: {     
	nodeIntegration: true,   // 集成node环境
	enableRemoteModule: true   // 使用remote模块
}
```

## 嵌入网页

正常操作流程，根据electron的BrowserView，直接设置mainWindow的BrowserView:
```js
var BrowserView = electron.BrowserView //引入BrowserView
var view = new BrowserView()   //new出对象
mainWindow.setBrowserView(view)   // 在主窗口中设置view可用
view.setBounds({x:0,y:100,width:1200, height:800})  //定义view的具体样式和位置
view.webContents.loadURL('https://jspang.com')  //wiew载入的页面
```

这有有个坑，需要先setBrowserView，然后再去做setBounds和loadURL操作，测试的时候，有时候会无法加载
