# Vuejs-Webpack

## webpack的使用

### webpack的基本使用

![webpack的基本使用](./img/webpack的基本使用1.png)

在`src`进行模块化开发然后使用以下命令对`src`中的js文件进行打包使用

```
E:\Java\Vue\Vuejs-v2\01-webpack的使用\webpack的起步>webpack ./src/main.js ./dist/bundle.js
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<script src="./dist/bundle.js"></script>
</body>
</html>
```

在`src`中可以使用多种模块化的开发规范, 在`webpack`的帮助下会将其打包