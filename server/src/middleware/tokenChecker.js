// import jwt to verify token
import jwt from "jsonwebtoken";

// import global error handler
import httpError from "../middleware/error.js";

const tokenChecker = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  //   parse token
  let token
  try {
    token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return next(new httpError("Authentication Failed", 401));
    }
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);

    // get username from token
    req.body.username = decodedToken.username;
    
    next();
  } catch (err) {
    return next(new httpError("Authentication Failed", 401));
  }
};

export default tokenChecker;
