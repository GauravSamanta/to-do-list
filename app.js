const express = require("express");
const app = express();
const connect = require("./db/connect");
const router = require("./routes/tasks");
app.use(express.json());

require('dotenv').config();

app.use("/api/v1/tasks", router);

const port =process.env.PORT|| 5000;

const start = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("Connected to DB");
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
