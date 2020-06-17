const express = require("express");
const app = express();

const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;
const users = require("./routes/api/users");
const hunts = require('./routes/api/hunts');
const categories = require('./routes/api/categories');
const bodyParser = require('body-parser');
const passport = require('passport');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connecting to mongoose
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

//middleware 
app.use(passport.initialize());
require('./config/passport')(passport);


//routes
app.get("/", (req, res) => res.send("Get Set Hello"));
app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use("/api/users", users);
app.use("/api/categories", categories);
app.use("/api/hunts", hunts);



