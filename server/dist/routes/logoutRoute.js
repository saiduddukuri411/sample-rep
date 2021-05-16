import express from "express";
import logoutAction from "../controllers/logoutController.js"; // import tokenChecker

import tokenChecker from "../middleware/tokenChecker.js";
const logoutRouter = express.Router();
logoutRouter.get("/", tokenChecker, logoutAction);
export default logoutRouter;