const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("./src/config/db");
const userDataController = require("./src/controller/userController");
const contactDataController = require("./src/controller/contactController");

const app = express();

app.use(
  session({
    secret: "food",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require("dotenv").config();
const PORT = process.env.PORT;

app.use("/", userDataController);
app.use("/", contactDataController);

app.listen(PORT, () => {
  console.log(`server listening on the port: ${PORT}`);
});

// //Import Dependency
// const express = require("express");
// const session = require("express-session");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const passport = require("passport");
// const path = require("path");
// const passportSetup = require("./passport");

// const mongoose = require("./src/config/db");
// const userController = require("./src/controller/userController");
// const contactController = require("./src/controller/contactController");

// // creating express app
// const app = express();

// // setup cors and body parser
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.use(bodyParser.json());

// //configure in express session
// app.use(
//   session({
//     secret: "food",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// // Initialize Passport
// app.use(passport.initialize());
// app.use(passport.session());

// //route setup
// app.use("/", userController);
// app.use("/", contactController);
// // app.use("/auth", userController);

// // //env config
// require("dotenv").config();
// const PORT = process.env.PORT || 5000;

// // start the server
// app.listen(PORT, () => {
//   console.log(`Server listening on the Port: ${PORT}`);
// });
