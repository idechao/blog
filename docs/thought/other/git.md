# git的日常使用

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