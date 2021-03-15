# Electron 错误总结

## Electron Security Warning 

运行报如下警告：
```js
Electron Security Warning (Insecure Content-Security-Policy) This renderer process has either no Content Security
```
可以直接在main文件上面，添加个忽略：

```js
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
```