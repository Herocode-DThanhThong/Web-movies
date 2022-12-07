const dotenv = require("dotenv");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

// <--------- Middleware --------->
dotenv.config();
app.use(cors());
app.use(express.json());

// Connect Mongodb
const { connectMongoDB } = require("./utils/mongoose/connect");
connectMongoDB();

// <--------- SOCKET.IO --------->
const Comment = require("./models/Comment");
const Users = require("./models/Users");

const socketio = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = socketio(server);
io.on("connection", async (socket) => {
  console.log("A user connected");
  socket.on("commentFilm", async (idFilm) => {
    await Comment.find({ idFilm }).then((res) => {
      socket.emit("comment", res);
    });
  });
  socket.on("sendComment", async (data, callback) => {
    const { idUser, idFilm, comment } = data;
    const { username } = await Users.findById(idUser);
    const newComment = new Comment({
      comment,
      idFilm,
      idUser,
      username,
    });
    await newComment.save();
    // console.log(newComment);
    io.emit("comment", [newComment]);

    callback();
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Route
const route = require("./routes/index");
route(app);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(port, () => {
  console.log(
    `>>>>>>>>>>> App listening at http://localhost:${port} <<<<<<<<<<<<<<<`
  );
});
