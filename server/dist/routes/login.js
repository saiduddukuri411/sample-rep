import express from "express"; // import login controllers

import loginAction from "../controllers/loginController.js";
const loginRouter = express.Router();
loginRouter.post("/", loginAction);
export default loginRouter;