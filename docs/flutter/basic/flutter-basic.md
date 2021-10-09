# flutter基础

## borderRadius

设置圆角的方式
```js
Container(
  decoration: BoxDecoration(
    borderRadius: const BorderRadius.all(
      Radius.circular(30.0),
    ),
  ),
```

`borderRadius`点击进去查看，其实是`final BorderRadiusGeometry? borderRadius;`，
也就是`BorderRadiusGeometry`类，写的时候，把后面的`Geometry`去掉就可以了。

简答写法，就是直接设置属性：

```js
borderRadius: BorderRadius.circular(30),
```

同样的，设置`padding`，是`EdgeInsetsGeometry`类，调用也是类似的：

```less
padding: const EdgeInsets.all(12.0),
```