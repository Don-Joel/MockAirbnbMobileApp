//const fs = require('fs');
const mysqlConn = require("../database/database");

module.exports = class Properties{
    constructor(id, name,location, imageURL, price) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.imageURL = imageURL;
        this.email = email;
        this.price = price;
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
            mysqlConn.query("Select * from user where id = ? ", userId, (err, res) => {
                if (err) {
                
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    //read all users
    getAll() {
        return new Promise((reject, resolve) => {
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