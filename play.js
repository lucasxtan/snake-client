//this file is where you launch your game client

//the client you build will connect to a game server ran by LHL
const {connect} = require('./client.js');

const net = require("net");

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '165.227.47.243',
//     port: 50541
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   conn.on("data", (data) => {
//     console.log('message from server:', data);
//   });

//   conn.on("connect", () => {
//     console.log('connected to the server');
//   });


//   return conn;
// };

console.log("Connecting ...");
connect();
