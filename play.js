//this file is where you launch your game client

//the client you build will connect to a game server ran by LHL
const connect = require('./client.js');

const setupInput = require('./input.js');

// const net = require("net")
let connection;

connection = connect();

setupInput(connection);

// console.log("Connecting ...");

// setupInput();

// const handleUserInput = function (key) {
//   let command = ''

//   // \u0003 maps to ctrl+c input
//   if (key === '\u0003') {
//     process.exit();
//   }

//   // if (key === "W") {
//   //   command = 'Move: up'
//   // }
//   conn.write(`${command}`);  
// };


// const setupInput = function () {
//   const stdin = process.stdin;

//   stdin.on("data", handleUserInput);
//   process.stdin.on('data', (key) => {
//     handleUserInput(key);
//   });
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();

//   return stdin;
// };

