const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log('message from server:', data);
  });


  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    
    conn.write('Name: XST');

    //for the Move: up message
    setInterval(() => {
    conn.write();  
  }, 50);
    
  });

  // conn.on('connect', () => {
  //   conn.write('Name: XST');
  // });

  // // setTimeout(() => {
  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });

  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });
  // // }, 500);

  return conn;
};

module.exports = {
  connect
}