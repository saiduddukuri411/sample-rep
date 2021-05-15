//import external dependencies
import express from "express";
import bodyParser from "body-parser";

// import global error handler
import httpError from "./middleware/error.js";

// import routers
import loginRoute from "./routes/login.js";

const app = express();

app.use(bodyParser.json());

app.use("/colorgame/login", loginRoute);

// if no route was found
app.use((req, res, next) => {
  next(new httpError("Route not found", 404));
});

// global error catcher
app.use( ( err, req, res, next ) => {
  res.status(err.code).json({ message: err.message || "invalid reuqest" });
} ) 

// if invalid route was given

app.listen(5000, () => {
  console.log("listening on port 5000");
});
