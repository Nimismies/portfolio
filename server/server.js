require("dotenv").config();
const express = require("express");
const db = require("./modules/dj")
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const auth = require("./modules/auth");

db();
// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});



// RUOTES
const registerRoute = require("./routes/registerRoute")
const loginRoute = require("./routes/loginRoute")
const welcomeRoute = require("./routes/welcomeRoute")

app.use("/" ,registerRoute)
app.use("/" ,loginRoute) 
app.use("/", welcomeRoute);

/*app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });*/


app.listen(process.env.PORT, () => console.log(`Server is ${process.env.PORT}`)) ;