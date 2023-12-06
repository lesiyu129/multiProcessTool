# multiProcessTool

nodejs 多进程函数封装

## 使用方法

```js
//index.js
const MultiProcessTool = require("MultiProcessTool");
const multiProcessTool = new MultiProcessTool("worker.js");

multiProcessTool.start("hello world").then((v) => console.log(v));
//or
const multis = [
  multiProcessTool.start("hello world1"),
  multiProcessTool.start("hello world2"),
  multiProcessTool.start("hello world3"),
];
Promisse.all(multis).then((v) => console.log(v));
return datas;

// worker.js
value = process.argv[2]; //"hello world"
async function run() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value);
      }, 1000);
    });
    process.send(result);
  } catch (error) {
    process.send(error);
  } finally {
    process.exit(0);
  }
}

run().catch(console.error);
```
