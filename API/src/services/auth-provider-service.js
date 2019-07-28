const Provider = require("../model/provider-model");

// //instantiate bcrypt
// var bcrypt = require('bcryptjs');

// //instantiate json web token
// var jwt = require('jsonwebtoken');

module.exports = class AuthProviderService {
  constructor() {}

  //to hash a password
  //salting 10 characters to hashed password
  // async hashPassword(password) {
  //   var salt = bcrypt.genSalt(10);
  //   hashPassword = await bcrypt.hash(password, salt);
  //   return hashPassword;
  // }

  // async login(authUser) {
  //   return new Promise((resolve, reject) => {
  //     User.prototype
  //       .getAll()
  //       .then(users => {
  //         const dbUser = users.filter(user => {
  //           return user.email == authUser.email;
  //         });
  //         if (dbUser.length) {
  //           //comparing hashed dbUser password and the unhashed authUser password
  //           //match is either true or false because that is what the compareSync function returns
  //           // const match = bcrypt.compareSync(dbUser[0].password, authUser.password)
  //           // if (match) {
  //           //   resolve(dbUser);
  //           // }
  //           if (dbUser[0].password == authUser.password) {
  //             resolve(dbUser);
  //           } else {
  //             reject("incorrect password");
  //           }
  //         } else {
  //           reject("user not found");
  //         }
  //       })
  //       .catch(err => {
  //         reject(err);
  //       });
  //   });
  // }

  //original login method
  login(authUser) {
    return new Promise((resolve, reject) => {
      Provider.prototype
        .getAll()
        .then(users => {
          const dbUser = users.filter(user => {
            return user.email == authUser.email;
          });
          if (dbUser.length == 1) {
            if (dbUser[0].password == authUser.password) {
              resolve(dbUser[0]);
            } else {
              reject("incorrect password");
            }
          } else {
            reject("User not found. Please enter a correct email address.");
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  //original login message
  register(authUser) {
    return new Promise((resolve, reject) => {
      Provider.prototype
        .getAll()
        .then(users => {
          const dbUser = users.filter(user => {
            return user.email == authUser.email;
          });
          if (dbUser.length >= 1) {
            if (dbUser[0].email == authUser.email) {
              reject("User email is already taken. Try again.");
            }
            {
              reject("Please fill out all required fields.");
            }
          } else {
            Provider.prototype
              .create(authUser)
              .then(user => resolve(user))
              .catch(err => reject(err));
          }
        })
        .catch(err => {
          reject("Please fill out the entire form");
        });
    });
  }

  // async register(authUser) {
  //   return new Promise((resolve, reject) => {
  //     User.prototype
  //       .getAll()
  //       .then(users => {
  //         const dbUser = users.filter(user => {
  //           return user.email == authUser.email;
  //         });
  //         if (dbUser.length >= 1) {
  //           if (dbUser[0].email == authUser.email) {
  //             reject("User email is already taken. Try again.");
  //           }
  //         } else {
  //           // const hashPasswords = hashPassword(authUser.password);
  //           // const userObj = {
  //           //   name: authUser.name,
  //           //   surName = authUser.surName,
  //           //   password: hashPasswords,
  //           //   cellPhone = authUser.cellPhone,
  //           //   email = authUser.email,
  //           //   password = authUser.password,
  //           //   role = authUser.role

  //           // }
  //           // const newUser = new User(userObj);
  //           User.prototype
  //             .create(newUser)
  //             .then(user => resolve(user))
  //             .catch(err => reject(err));
  //         }
  //       })
  //       .catch(err => {
  //         reject(err);
  //       });
  //   });
  // }

  // async getJwtToken(authUser, rememberMe) {
  //   let jwtObject = {};

  //   jwtObject.id = authUser.id,
  //     jwtObject.name = authUser.name,
  //     jwtObject.cellPhone = authUser.cellPhone,
  //     jwtObject.email = authUser.email,
  //     jwtObject.role = authUser.role,
  //     jwtObject.remember = rememberUser;
  //   return await jwt.sign(Object.assign({}, jwtObject), "secret key", {
  //     expiresIn: "2d"
  //   });
  // }

  // async verifyToken(token) {
  //   return await jwt.verify(token, "secret key");
  // }
};
