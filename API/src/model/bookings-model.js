const mysqlConn = require("../database/database");

module.exports = class BookingRequests {
  constructor(dateFrom, dateTo, userId, propertyId, status) {
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.userId = userId;
    this.propertyId = propertyId;
    this.status = status;
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
        "UPDATE booking SET status= ? WHERE id = ?",
        [booking.status, id],
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

  removeAll(propertyId) {
    return new Promise((reject, resolve) => {
      mysqlConn.query(
        "DELETE FROM booking WHERE propertyId = ?",
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

  getByPropertyId(propertyId) {
    return new Promise((reject, resolve) => {
      mysqlConn.query(
        "Select * from booking where propertyId = ? ",
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
