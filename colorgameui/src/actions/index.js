

export const loggingAction = ( username, token ) => {
    
   return {
       
       type: "SIGN_IN",
       username: username,
       token: token
   }
};

export const tokenAction = ( token ) => {
    return {
        type: "SIGN_IN",
        token: token
    }
}