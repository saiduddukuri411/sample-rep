import httpError from "../middleware/error.js";
import jwt from "jsonwebtoken";
import colorGenerator from "../rgbPicker.js";

//import the database
import scores from '../scoreDB.js'

// controller used to login user
const logInUser = (req, res, next) => {
  const { username, password } = req.body;

  //  checks if user is a valid user using env variables
  if (username !== process.env.USERNAME || password !==process.env.PASSWORD) {
     return next(new httpError("Username or Password are invalid", 403));
  }

  //  generate accesstoken and send back
  let token;
  try {
    token = jwt.sign({ username }, process.env.JWT_KEY );
  } catch (err) {
      console.log(err)
    return next(new httpError("unable to sign you in ,please try again ", 500));
  }
  if(!scores[username]){
      scores[username] = { wins: 0, losses: 0 }
  }
  
  let { wins, losses } = scores[username];
  let [ idx, colors ] = colorGenerator();
  res.status( 200 ).json({ token, result: idx, colors, wins, losses })

};

export default logInUser;
