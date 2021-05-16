import scores from "../scoreDB.js";
import httpError from "../middleware/error.js";

// resets the user scores
const logoutGame = ( req, res, next) => {
   // get user name from body
   const { username  } = req.body;
   if( scores[username] == undefined){
    return next( new httpError( "Bad Request", 404 ) )
  }
//   resets the score
  scores[ username ].wins = 0
  scores[ username ].losses = 0


   res.status( 200 ).json( { message: "logged out"} )
}

export default logoutGame;