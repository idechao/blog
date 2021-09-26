# libimobiledevice安装失败

Android Studio 连接ios真机调试，需要安装下面的命令：

```
brew update
brew install --HEAD libimobiledevice
brew install ideviceinstaller ios-deploy cocoapods
pod setup
```

安装`libimobiledevice`的过程中安装失败，提示：
<div style='color:red;font-size:14px;'>SSL certificate problem: certificate has expired</div>


```
Error: libimobiledevice: Failed to download resource "libimobiledevice"
Failure while executing; `git clone --branch master -c advice.detachedHead=false https://git.libimobiledevice.org/libimobiledevice.git /Users/idechao/Library/Caches/Homebrew/libimobiledevice--git` exited with 128. Here's the output:
Cloning into '/Users/idechao/Library/Caches/Homebrew/libimobiledevice--git'...
fatal: unable to access 'https://git.libimobiledevice.org/libimobiledevice.git/': SSL certificate problem: certificate has expired
```

可以执行下面的命令关闭SSL要求，然后再次安装：
```
git config --global http.sslVerify false
```

对应的，开启的设置如下：
```
git config --global http.sslVerify true

```