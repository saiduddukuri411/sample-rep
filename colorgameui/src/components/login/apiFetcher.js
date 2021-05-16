import { useState, useEffect } from "react";

const apiFetcher = async (loader, setLoader, username, password) => {
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
  console.log(responseData);
  
};

export default apiFetcher;
