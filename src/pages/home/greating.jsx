import React from "react";

function Greeting() {
  const date = new Date();
  const currentTime = date.getHours();
  let greeting;

  if (currentTime < 8) {
    greeting = "Shuuush I slept!";
  }else if (currentTime < 13) {
    greeting = "Beautiful Morning!"; 
  } else if (currentTime < 17) {
    greeting = "Did You Eat Something?";
  } else if (currentTime < 21) {
    greeting = "Are You At Home!!!";
  }else if (currentTime < 24) {
    greeting = "Read A Book!";
  }

  return <h1>{greeting}</h1>;
}

export default Greeting;