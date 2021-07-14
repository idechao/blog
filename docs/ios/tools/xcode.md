# xcode疑难杂症

记录日常使用中，xcode的一些点，问题也好，tips也好，用于记录。

## xcode显示每一行的提交记录

如图所示的效果，正常有提交记录自后，每一行后面都显示提交的记录

<img src='./image/xcode2.png' style="width:500px;" />

设置方法如下：

<img src='./image/xcode1.png' style="width:200px;" />

## NSLog不输出日志

Product->Scheme->Edit Scheme，勾选掉 `OS_ACTIVITY_MODE`

<img src='./image/xcode3.png' style="width:500px;" />