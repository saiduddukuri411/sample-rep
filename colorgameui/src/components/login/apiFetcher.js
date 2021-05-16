import { useState, useEffect } from "react";

import React from "react";

const ApiFetcher = async (loader, setLoader, username, password, getCrentials) => {
  // initialized dispatcher
   

  setLoader((prev) => true);
  const response = await fetch("http://localhost:5000/colorgame/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const responseData = await response.json();
  setLoader((prev) => false);
  if (!response.ok) {
    alert("Invalid Username or Password, Try again");
    return;
  }
  // console.log(responseData);
  getCrentials( username, responseData.token );
  
};

export default ApiFetcher;
