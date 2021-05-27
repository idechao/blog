# 博客发布

## 博客介绍

博客框架为 [VuePress](https://www.vuepress.cn/guide/getting-started.html)


## 新建页面

配置文件路径，为 `docs/.vuepress/config.js`。

`themeConfig`下的文件路径，为访问路径，和实际路径保持一致，也就是本地需要对应的文件夹。

> { text: 'electron', link: '/electron/' } 该配置，本地有对应的electron的文件夹。


文件下下，总体描述，为`README.md`，可以直接在该位置写介绍等。

## 本地调试

```
yarn dev
```

## 发布

正常发布流程，是使用dist目录下的文件进行上传，但是本地文件也需要更新保存，方便多端研发。

这里增加个部署脚本，每次编译生成的dist目录和文件同级，然后进入同级的目录，对文件进行上传操作。

```
// 1.
yarn build

// 2.
yarn deploy
```