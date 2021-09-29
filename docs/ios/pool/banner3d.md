## 裸眼3d效果

按照介绍用iOS实现了一下。

<img src='https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5f2e1f76b8a84bfba9cf028e4cb3f409~tplv-k3u1fbpfcp-watermark.awebp' />

## 原理

这里主要对图片做分层，分为底层，中层，和上层，中层可以设置不动，比如demo中的文字部分，就是中层的图片；底层背景图，设置可以左右移动；顶层的雪人，可以左右移动，和上下移动。

根据iOS陀螺仪CMMotionManager，可以很方便的获取到xyz轴的旋转角度，attitude属性，然后就可以根据旋转角度，来设置图片的偏移值。

因为左右偏移之后，两边不会出现空白的情况，所以实际图片的大小需要加上两边可移动的距离。

差异化，也可以设置文本的移动，比小雪人的移动慢，这样也不错，就看实际的效果了。
attitude属性解释
如下图坐标系，其中绕 x 轴运动称作 pitch（俯仰），绕 y 轴运动称作 roll（滚转），绕 z 轴运动称作 yaw（偏航）

<img src='https://upload-images.jianshu.io/upload_images/1000992-b8d68345159a24ee.png?imageMogr2/auto-orient/strip|imageView2/2/w/760/format/webp' />

## 链接

仓库地址：[github](https://github.com/idechao/banner3d)

参考：

● [自如客APP裸眼3D效果的实现](https://juejin.cn/post/6989227733410644005#comment)

● [iOS传感器与CMMotionManager](https://www.jianshu.com/p/2f5cca76c5ee)

● [fluttr实现可参考](https://juejin.cn/post/6991409083765129229)
