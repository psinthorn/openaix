const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const srvPort = process.env.PORT || 4000;


app.use("/openai", require("./routes/openaiRoutes"));
// Index route
app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Hello OpenAi"
  });
});



app.listen(srvPort, () => {
  console.log("Server is started and running on port: ", srvPort);
});
