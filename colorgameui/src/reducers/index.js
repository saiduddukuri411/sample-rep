import { combineReducers } from "redux";

import { loggingReducer } from "./loggedIn";

// root reducer that combines all the dispatches
const rootReducer = combineReducers({ loggingReducer });

export default rootReducer;