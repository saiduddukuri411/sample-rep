
export const loggingReducer = ( state = { username: null, token: null }, action ) => {
   
    switch( action.type ){
         case "SIGN_IN": return { ...state, username: action.username, token: action.token };
         default: return state;
    }
} 

