import scores from "../scoreDB.js";
import colorGenarator from "../rgbPicker.js";
import httpError from "../middleware/error.js"; // sets the scores of the user

const setGameScores = (req, res, next) => {
  // get is right and user name from body
  const {
    username,
    passed
  } = req.body;

  if (!scores[username]) {
    return next(new httpError("Bad Request", 404));
  } // manipulates scores based on user selection


  if (passed) {
    scores[username].wins += 1;
  } else {
    scores[username].losses += 1;
  } // updates data base and returns the updated scores


  let {
    wins,
    losses
  } = scores[username];
  let [idx, colors] = colorGenarator();
  res.status(200).json({
    result: idx,
    colors,
    wins,
    losses
  });
};

export default setGameScores;