import express from "express";

import gameScorer from "../controllers/gameController.js"

// import tokenChecker
import tokenChecker from "../middleware/tokenChecker.js";

const gameRouter = express.Router();

gameRouter.get("/", tokenChecker, gameScorer)

export default gameRouter;