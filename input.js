// const net = require("net");
// const { connect } = require("./client");

let connection;

const handleUserInput = function (key) {
  // let command = ''

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write('Move: up')
  }

  if (key === 'a') {
    connection.write('Move: left')
  }

  if (key === 's') {
    connection.write('Move: down')
  }

  if (key === 'd') {
    connection.write('Move: right')
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;

// const setupInput = (conn) => {
//   connection = conn;

//   const stdin = process.stdin;

//   stdin.on("data", handleUserInput);
//   // process.stdin.on('data', (key) => {
//   //   handleUserInput(key);
//   // });
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();

//   return stdin;
// };

  // if (key === "W") {
  //   command = 'Move: up'
  // }
  // conn.write(`${command}`);