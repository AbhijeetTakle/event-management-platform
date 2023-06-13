const express = require("express");
const cors = require("cors");
const connectdb = require("./connectdb");
const router = require("./routes/event");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

connectdb();

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log("Ecommerce API Launched...");
});
