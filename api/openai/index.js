const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();

// declair express constant
const app = express();
// enable json body parser 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create static folder
app.use(express.static(path.join(__dirname, 'public')));

// declair server port 
const srvPort = process.env.PORT || 4000;

// Routes start here
app.use("/openai", require("./routes/openaiRoutes"));
// Index route
app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Hello OpenAi"
  });
});


// start server and server port listening
app.listen(srvPort, () => {
  console.log("Server is started and running on port: ", srvPort);
});
