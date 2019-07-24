//const fs = require('fs');
const mysqlConn = require("../database/database");

module.exports = class Properties {
  constructor(name, location, imageURL, price) {
    this.name = name;
    this.location = location;
    this.imageURL = imageURL;
    this.price = price;
  }

  //post a new user
  create(newProperty) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO provider set ?", newProperty, (err, res) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        } else {
          console.log(res);
          resolve(res);
        }
      });
    });
  }

  //delete
  remove(propertyId) {
    return new Promise((reject, resolve) => {
      mysqlConn.query(
        "DELETE FROM provider WHERE id = ?",
        propertyId,
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  //Read by ID
  getById(proiverId) {
    return new Promise((reject, resolve) => {
      mysqlConn.query(
        "Select * from provider where id = ? ",
        proiverId,
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  //read all users
  getAll() {
    return new Promise((reject, resolve) => {
      mysqlConn.query("Select * from provider", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
