const io = require("socket.io")(3000, {
  cors: {
    origin: ["http://localhost:5500"],
    methods: ["GET", "POST"],
  },
});
// io.set("origins", "http://localhost:5500");
const users = {};
io.on("connection", (socket) => {
  socket.on("new-user", (names) => {
    users[socket.id] = names;
    socket.broadcast.emit("user-connected", names);
  });

  socket.on("send-chat-message", (message) => {
    console.log(message);
    socket.broadcast.emit("chat-message", {
      message: message,
      name: users[socket.id],
    });
  });
});
