(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{372:function(e,s,a){"use strict";a.r(s);var t=a(45),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"electron"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#electron"}},[e._v("#")]),e._v(" Electron")]),e._v(" "),a("h2",{attrs:{id:"引入node模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入node模块"}},[e._v("#")]),e._v(" 引入node模块")]),e._v(" "),a("p",[e._v("使用")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var fs = require('fs')\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("生成新的BrowserWindow的时候，需要设置两个对应的属性：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("webPreferences: {\n  nodeIntegration: true,\n  contextIsolation: false\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"remote模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote模块"}},[e._v("#")]),e._v(" remote模块")]),e._v(" "),a("p",[e._v("remote在新版本被默认禁止了，可以在配置中打开：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("webPreferences: {\n  enableRemoteModule: true  // 使用remote模块\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("不过，这样也是会有警告：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("The remote module is deprecated.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("参照它的提示来的话，通过安装单独的模块 electron/remote 来配置。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install --save @electron/remote\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// in the main process:\nrequire('@electron/remote/main').initialize()\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// in the renderer process:\n\n// Before\nconst { BrowserWindow } = require('electron').remote\n\n// After\nconst { BrowserWindow } = require('@electron/remote')\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("参考：https://github.com/electron/remote")]),e._v(" "),a("h2",{attrs:{id:"生成渲染窗口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成渲染窗口"}},[e._v("#")]),e._v(" 生成渲染窗口")]),e._v(" "),a("p",[e._v("Cannot read property ‘BrowserWindow‘ of undefined")]),e._v(" "),a("p",[e._v("在Electron 10.x中，enableRemoteModule的默认值为false，也就是默认情况下是不支持使用remote模块的，因此使用remote模块的应用程序需要将enableRemoteModule显式设置为true。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("webPreferences: {     \n\tnodeIntegration: true,   // 集成node环境\n\tenableRemoteModule: true   // 使用remote模块\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"错误处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[e._v("#")]),e._v(" 错误处理")]),e._v(" "),a("h3",{attrs:{id:"electron-security-warning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#electron-security-warning"}},[e._v("#")]),e._v(" Electron Security Warning")]),e._v(" "),a("p",[e._v("运行报如下警告：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Electron Security Warning (Insecure Content-Security-Policy) This renderer process has either no Content Security\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("可以直接在main文件上面，添加个忽略：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);