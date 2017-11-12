var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

io.on("connection", socket => {
  const username = socket.handshake.query.username;
  console.log(`${username} connected`);

  socket.on("client:message", data => {
    //console.log(`${data.username}: ${data.message}`);
    // message received from client, now broadcast it to everyone else
    socket.broadcast.emit("server:message", data);
  });

  socket.on("disconnect", () => {
    console.log(`${username} disconnected`);
  });
});

http.listen(8000, function() {
  console.log("listening on *:8000");
});
