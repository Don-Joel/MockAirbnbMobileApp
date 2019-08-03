// const users = [
//     {
//         "id": "1",
//         "name": "Byron",
//         "role": "user",
//         "email": "byron@mail.com",
//         "password": "P@ssword"
//     },
//     {
//         "id": "2",
//         "name": "brett",
//         "role": "service provider",
//         "email": "brett@mail.com",
//         "password": "P@ssword1"
//     },
//     {
//         "id": "3",
//         "name": "Riaz",
//         "role": "user",
//         "email": "riaz@mail.com",
//         "password": "P@ssword2"
//     }
// ]

//const fs = require('fs');
const mysqlConn = require("../database/database");

const roles = {
  ADMIN: "admin",
  PROVIDER: "provider",
  USER: "user"
};

module.exports = class User {
  constructor(surName, name, cellPhone, email, password, role) {
    this.name = name;
    this.surName = surName;
    this.cellPhone = cellPhone;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  //post a new user
  create(newUser) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO user set ?", newUser, (err, res) => {
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

  setImageUrl(userId, url) {
    return new Promise((resolve, reject) => {
      User.prototype.updateImage(userId, url, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }

  updateImage(userId, imgUrl) {
    return new Promise((resolve, reject) => {});
  }

  updateById(userId, user) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE user SET name = ?, surName = ?, cellPhone = ?, email = ?, password = ?, role = ? WHERE id = ?",
        [
          user.name,
          user.surName,
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

  //delete
  remove(userId) {
    return new Promise((reject, resolve) => {
      mysqlConn.query("DELETE FROM user WHERE id = ?", userId, (err, res) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  //Read by ID
  getById(userId) {
    return new Promise((reject, resolve) => {
      mysqlConn.query(
        "Select * from user where id = ? ",
        userId,
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
      mysqlConn.query("Select * from user", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
