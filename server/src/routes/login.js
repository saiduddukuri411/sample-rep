import express from "express";

// import login controllers
import loginAction from "../controllers/loginController.js";

const loginRouter = express.Router();

loginRouter.get("/", loginAction);

export default loginRouter;