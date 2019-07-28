//const fs = require('fs');
const mysqlConn = require("../database/database");

module.exports = class Provider {
  constructor(name, lastName, cellPhone, email, password, role) {
    this.name = name;
    this.lastName = lastName;
    this.cellPhone = cellPhone;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  //post a new user
  create(newProvider) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO provider set ?", newProvider, (err, res) => {
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

  updateByID(userId, user) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE user SET name = ?, lastName = ?, cellPhone = ?, email = ?, password = ?, role = ? WHERE id = ?",
        [
          user.name,
          user.lastName,
          user.cellPhone,
          user.email,
          user.password,
          user.role,
          userId
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

  //delete by id
  remove(providerId) {
    return new Promise((reject, resolve) => {
      mysqlConn.query(
        "DELETE FROM provider WHERE id = ?",
        providerId,
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
  getById(providerId) {
    return new Promise((reject, resolve) => {
      mysqlConn.query(
        "Select * from provider where id = ? ",
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
    return new Promise((resolve, reject) => {
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
