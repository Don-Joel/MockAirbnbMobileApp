//const fs = require('fs');
const mysqlConn = require("../database/database");

module.exports = class Properties {
  constructor(name, location, imageUrl, price, providerId) {
    this.name = name;
    this.location = location;
    this.imageUrl = imageUrl;
    this.price = price;
    this.providerId = providerId;
  }

  //post a new user
  create(newProperty) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO property set ?", newProperty, (err, res) => {
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

  updateById(propertyId, property) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE property SET name = ?, location = ?, imageUrl = ?, price = ? WHERE id = ?",
        [
          property.name,
          property.location,
          property.imageUrl,
          property.price,
          propertyId
        ],
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

  //delete
  remove(propertyId) {
    return new Promise((reject, resolve) => {
      mysqlConn.query(
        "DELETE FROM property WHERE id = ?",
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
  getById(propertyId) {
    return new Promise((reject, resolve) => {
      mysqlConn.query(
        "Select * from property where id = ? ",
        propertyId,
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

  getByProviderId(providerId) {
    return new Promise((reject, resolve) => {
      mysqlConn.query(
        "Select * from property where providerId = ? ",
        providerId,
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
      mysqlConn.query("Select * from property", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
