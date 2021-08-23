# git的日常使用

## git撤销某次提交
撤销某一次的提交，`revert`，会生成对应节点，再次提交一下

```
git revert  99f972a140d4597ce77d548f89f497bcffaa45df
```

## git从一个commit转移到另一个分支
本文是从dev/join-corp分支一次commit提交到dev/bug-fix分支上，只需执行：
git cherry-pick 新分支就可以了。

<img src="https://img-blog.csdnimg.cn/20190603211351843.png" / >

可参考：[git cherry-pick 教程](https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html)


## 回滚上一次merge操作

```
git reset --hard ORIG_HEAD
```

## 从tag下拉取分支

```
git checkout -b new_brach tag_name
```

## git报警：Pulling without specifying how to reconcile divergent branches

报错如下：

```
hint: Pulling without specifying how to reconcile divergent branches is
hint: discouraged. You can squelch this message by running one of the following
hint: commands sometime before your next pull:
hint: 
hint:   git config pull.rebase false  # merge (the default strategy)
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint: 
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
```

解决办法：

```
$ git config pull.ff false
$ git config --global pull.rebase false
```