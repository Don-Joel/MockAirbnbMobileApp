const mysqlConn = require("../database/database");

module.exports = class BookingRequests {
  constructor(dateFrom, dateTo, userId) {
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.userId = userId;
  }

  //post a new user
  create(booking) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO booking set ?", booking, (err, res) => {
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

  updateById(id, booking) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE user SET dateTo = ?, userId = ?, dateFrom = ?, propertyId = ?, status= ?WHERE id = ?",
        [
          booking.dateTo,
          booking.userId,
          booking.dateFrom,
          booking.propertyId,
          booking.satus,
          id
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
  remove(id) {
    return new Promise((reject, resolve) => {
      mysqlConn.query("DELETE FROM booking WHERE id = ?", id, (err, res) => {
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
  getById(id) {
    return new Promise((reject, resolve) => {
      mysqlConn.query("Select * from booking where id = ? ", id, (err, res) => {
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
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from booking", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
