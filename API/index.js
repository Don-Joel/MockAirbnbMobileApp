//Importing express
const express = require("express");
//Initiating express
const app = express();

//Allows us to access from another device
const cors = require("cors");
app.use(cors());

//

//Body parser middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

//upload image
//const multipartMiddleware = multipart({ uploadDir: "./uploads" });

//middleware function that has access to req and res
//app.use(jwtAuth);

//Routes
app.use("/api/user", require("./src/api/user-routes"));
app.use("/api/provider", require("./src/api/provider-routes"));
app.use("/api/auth-user", require("./src/api/auth-user-routes"));
app.use("/api/auth-provider", require("./src/api/auth-provider-routes"));
app.use("/api/provider", require("./src/api/auth-provider-routes"));
app.use("/api/properties", require("./src/api/properties-routes"));
app.use("/api/bookings", require("./src/api/booking-routes"));

//Custom middleware
app.use((req, res, next) => {
  console.log("This is the middleware function printing the body: ");
  console.log(req.body);
  next();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "127.0.0.1", () =>
  console.log(`Server running on port ${PORT}`)
);
