# M1芯片Mac上Homebrew安装教程


## 1.安装 ARM 版 Homebrew

根据官方规划，ARM 版 `Homebrew` 必须安装在 `/opt/homebrew` 路径下，而非此前的 `/usr/local/Homebrew`。

官方脚本应该更新了，先试下下面这个命令：

```
/bin/bash -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install.sh)"

```

如果上面那个命令不行的话，说明官方的安装脚本还未更新，可以通过如下命令手动安装：

```
cd /opt # 切换到 /opt 目录
mkdir homebrew # 创建 homebrew 目录
curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew
```

> 注： 如果安装和使用过程中报错，可能是因为当前用户对于 `/opt/homebrew` 路径没有权限。对此，可以通过 `sudo chown -R $(whoami) /opt/homebrew` 接管该目录。

虽然上面的步骤已经安装了 ARM 版 Homebrew，但此时在终端中运行 brew 命令并不能直接启动该版本。这是因为默认情况下，ARM 版 Homebrew 用来安装程序的路径 `/opt/homebrew/bin` 并不在环境变量 PATH 中，因此终端无法检索到该路径下的 brew 程序。

为此，编辑配置文件 ~/.zshrc，加入如下内容：

```
path=('/opt/homebrew/bin' $path)
export PATH
```

> 注:建议用户使用 macOS Big Sur 的默认终端 zsh，如使用 bash 或 fish，则修改 ~/.bashrc 或 ~/.config/fish/config.fish，后同

然后重新启动终端。这样，直接执行 brew 就可以启动 ARM 版的 Homebrew 了。

## 2.安装 X86 版 Homebrew

因为目前很多软件包没有支持ARM架构，我们也可以考虑使用x86版的Homebrew。

在命令前面添加arch -x86_64，就可以按X86模式执行该命令，比如：

```
arch -x86_64 /bin/bash -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install.sh)"
```

## 多版本共存

如果你同时安装了ARM和X86两个版本，那你需要设置别名，把命令区分开。

同样是.zshrc面添加：

```
alias brew='arch -arm64 /opt/homebrew/bin/brew'
alias ibrew='arch -x86_64 /usr/local/bin/brew'
```

brew、ibrew可以根据你的喜好自定义。我这里默认用ARM的设置成brew，也有的用abrew，默认就好了。

然后再执行`source ~/.zprofile`或`source ~/.bash_profile`命令更新文件。


参考链接：
- [苹果M1 Mac上怎样使用Homebrew](https://blog.csdn.net/a055350/article/details/111040458)
- [M1芯片Mac上Homebrew安装教程](https://zhuanlan.zhihu.com/p/341831809)



