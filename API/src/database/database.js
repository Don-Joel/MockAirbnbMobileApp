"use strict";

const mysql = require("mysql");

const config = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "fs_bnb"
};

// const config = {
//   host: "us-cdbr-iron-east-02.cleardb.net",
//   port: 3306,
//   user: "bc05126ff0e150",
//   password: "6910055d",
//   database: "heroku_a3ee1eece26bd24"
// };

//bc05126ff0e150:6910055d@us-cdbr-iron-east-02.cleardb.net/heroku_a3ee1eece26bd24?reconnect=true
mysql: var connection = mysql.createConnection(config);

connection.connect(err => {
  if (err) console.log(err);
  console.log("Database Connected: " + config.host + ":" + config.port);
});

module.exports = connection;
