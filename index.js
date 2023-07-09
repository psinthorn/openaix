// Modules or libraries requirement 
const express = require('express');
const dotenv = require('dotenv').config();

// Routes
const openaiRoutes = require("./routes/openaiRoutes")

// Start to implement app
const app = express();
const srvPort = process.env.PORT || 4000;


app.use("/openai", openaiRoutes );
// Index route
app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Hello OpenAi"
  });
});



app.listen(srvPort, () => {
  console.log("Server is started and running on port: ", srvPort);
});
