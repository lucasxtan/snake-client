const net = require("net");

const handleUserInput = function (key) {
  let command = ''

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  // if (key === "W") {
  //   command = 'Move: up'
  // }
  conn.write(`${command}`);  
};


const setupInput = function () {
  const stdin = process.stdin;

  stdin.on("data", handleUserInput);
  process.stdin.on('data', (key) => {
    handleUserInput(key);
  });
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  return stdin;
};

module.exports = {
  setupInput
}