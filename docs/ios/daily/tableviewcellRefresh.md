# UITableView只更新高度不更新内容

场景描述：

tableviewCell里，比如有个输入框，会根据输入框的内容做在输入框下面做实时提示，期间键盘不能隐藏。


这里刷新可能首先都会先到reload，这里不能用，因为reload会使得键盘失去焦点。


可以调用下面的方式，果只是想更新高度，不更新内容。会让所有的cell重新布局，然后重新计算高度
```
[self.tableView beginUpdates];
[self.tableView endUpdates];
```

也可以用如下的方式：
```
dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(0.3 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
    if (@available(iOS 11.0, *)) {
        [tableView performBatchUpdates:^{

        } completion:^(BOOL finished) {

        }];
    }
});
```

这里要增加个延迟，要不容易引起某些异常case，比如下面的错误异常：

```
(os/kern) invalid capability (0x14) "Unable to insert COPY_SEND"
```