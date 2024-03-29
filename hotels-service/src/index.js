const express = require("express");
const router = require("./routes/hotels.route");
const { RoomRouter } = require("./routes/rooms.route");

const app = express();

app.use(express.json());

const port = process.env.PORT || "3002";

app.use('/hotels', router)
app.use('/room',RoomRouter)

app.listen(port, () => {
  console.log(`Server Running at ${port} 🚀`);
});

module.exports = app;