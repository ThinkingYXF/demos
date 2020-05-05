
## 查看npm全局路径
```
npm root -g
```

## 查看npm全局安装包 (--depth=0 表示只显示父级)
```
npm list --depth=0 -g
```

## 问题1：如果全局安装vue/cli后 提示vue内部或外部命令？
## 解决：全局搜索vue.cmd 将vue.cmd所在的路径添加到环境变量Path后面