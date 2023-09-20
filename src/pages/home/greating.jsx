import React from "react";

function Greeting() {
  const date = new Date();
  const currentTime = date.getHours();
  let greeting;

  if (currentTime < 12) {
    greeting = "Good Morning";
  } else if (currentTime < 17) {
    greeting = "Good Afternoon";
  } else if (currentTime < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  return <h1>{greeting}</h1>;
}

export default Greeting;