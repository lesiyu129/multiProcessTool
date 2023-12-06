const { fork } = require("node:child_process");
class MultiProcessTool {
  constructor(path_url) {
    this.path_url = path_url;
  }
  async start(...args) {
    return new Promise((res, rej) => {
      const child = fork(this.path_url, args);
      child.on("message", (message) => {
        res(message);
      });
      child.on("error", (error) => {
        rej(error);
      });
    });
  }
}
module.exports = MultiProcessTool;
