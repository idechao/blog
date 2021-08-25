# chisel

## 介绍

- 官网链接：[chisel](https://github.com/facebook/chisel)

facebook出品的lldb工具


## 安装

可以使用`brew`来安装。

```
brew install chisel
```

然后根据命令行下的提示，在` ~/.lldbinit`里，添加命令(这里最好根据命令行的提示添加，环境变量可能不同)：

```
command script import /opt/homebrew/opt/chisel/libexec/fbchisellldb.py
```

如果没有` ~/.lldbinit`文件，就创建一个好了。`touch ~/.lldbinit`

如果M1电脑还未安装`brew`，可以参考[M1芯片Mac上Homebrew安装教程](https://www.idechao.com/blog/thought/other/brew.html)

## 命令

Command | Description |
:-: | :-: |
pviews | bbb |
pvc | 递归打印 key window 上的 View Controller |
visualize | 在 Mac 的预览 APP 中打开 UIImage, CGImageRef, UIView, CALayer, NSData (of an image), UIColor, CIColor, or CGColorRef|
fv | 在视图层级中，找到类名包含要搜索类名的所有 View |
fvc | 在视图层级中，找到类名包含要搜索类名的所有 View Controller
show/hide | 显示或隐藏指定的 View 或者 Layer
mask/unmask | 在 View 或者 Layer 的上方添加/隐藏一个透明的蒙版
border/unborder | 给 View 或者 Layer 添加/隐藏一个边框
caflush | 重新渲染页面
bmessage | 给类方法或实例方法添加一个断点，即使这个类没有实现该方法(父类实现了该方法)
presponder | 打印从指定对象开始的响应链

### pvc

```
<RootTabBarController 0x7fd9fe80cc00>, state: appeared, view: <UILayoutContainerView 0x7fda00006390>
   | <BaseNavigationController 0x7fd9fd805e00>, state: appeared, view: <UILayoutContainerView 0x7fd9fd402df0>
   |    | <RootTableViewController 0x7fd9fd402a60>, state: disappeared, view: <UITableView 0x7fd9ff828200> not in the window
   |    | <EnumerateDemoViewController 0x7fda02001140>, state: appeared, view: <UIView 0x7fda0000d760>
```

### pviews

```
<UIWindow: 0x7fd9fd602070; frame = (0 0; 375 667); gestureRecognizers = <NSArray: 0x600002918ba0>; layer = <UIWindowLayer: 0x6000027602a0>>
   | <UITransitionView: 0x7fda0201a040; frame = (0 0; 375 667); autoresize = W+H; layer = <CALayer: 0x60000272ef00>>
   |    | <UIDropShadowView: 0x7fda02016630; frame = (0 0; 375 667); clipsToBounds = YES; autoresize = W+H; layer = <CALayer: 0x60000272f040>>
   |    |    | <UILayoutContainerView: 0x7fda00006390; frame = (0 0; 375 667); autoresize = W+H; layer = <CALayer: 0x6000027592a0>>
   |    |    |    | <UITransitionView: 0x7fda00006f50; frame = (0 0; 375 667); clipsToBounds = YES; autoresize = W+H; layer = <CALayer: 0x600002759300>>
  ......
   |    |    |    |    |    |    | <_UIVisualEffectContentView: 0x7fd9fd7052f0; frame = (0 0; 371 48); autoresize = W+H; tintColor = UIExtendedGrayColorSpace 1 1; layer = <CALayer: 0x600002765700>> disablesGroupFiltering
   |    |    |    |    |    | <UITabBarSwappableImageView: 0x7fda0200eaa0; frame = (174.5 4; 21 28); opaque = NO; userInteractionEnabled = NO; layer = <CALayer: 0x60000272ec40>>
   |    |    |    |    |    | <UITabBarButtonLabel: 0x7fda02401f50; frame = (158 34.5; 54.5 12); text = 'Downloads'; opaque = NO; userInteractionEnabled = NO; layer = <_UILabelLayer: 0x60000047ce60>>
```
pviews 打印的东西太多，"......" 省略了许多内容。想查找关心的 view，比较难查找，我们通过 `help pviews` 可以查看更详细的使用方法。

我们加上 <aView> 和 -m 参数

`pviews 0x7fda0000d760 -m`

```
<UIView: 0x7fda0000d760>
   | <UIButton: 0x7fda0000d8c0>
   |    | <UIButtonLabel: 0x7fd9fd40d0b0>
   | <UIButton: 0x7fda0000e7f0>
   |    | <UIButtonLabel: 0x7fd9fd40ce20>
   | <UIButton: 0x7fda0000ea90>
   |    | <UIButtonLabel: 0x7fd9fd40cb90>
   | <UIButton: 0x7fda0000ed30>
   |    | <UIButtonLabel: 0x7fd9fd40c6f0>
```

其他具体可以参考下面文章:

- https://github.com/facebook/chisel#readme
- https://www.jianshu.com/p/70dd243a14c1
