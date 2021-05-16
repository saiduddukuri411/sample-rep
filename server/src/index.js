//import external dependencies
import express from "express";
import bodyParser from "body-parser";

// import global error handler
import httpError from "./middleware/error.js";

// import routers
import loginRoute from "./routes/login.js";
import gameRoute from "./routes/gameRoute.js";
import logoutRoute from "./routes/logoutRoute.js"

const app = express();

app.use(bodyParser.json());

// cors polacies
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // response.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,HEAD,PUT"
  );

  next();
});


app.use("/colorgame/login", loginRoute);
app.use("/colorgame/game", gameRoute);
app.use("/colorgame/logout", logoutRoute);

// if no route was found
app.use((req, res, next) => {
  next(new httpError("Route not found", 404));
});

// global error catcher
app.use((err, req, res, next) => {
  res.status(err.code).json({ message: err.message || "invalid reuqest" });
});

// if invalid route was given

app.listen(5000, () => {
  console.log("listening on port 5000");
});
