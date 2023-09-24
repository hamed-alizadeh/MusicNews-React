import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HelpLayOut () {
 return (
 <div className="help-layout">
  <div className="connection">
  <h3>Get in Touch!</h3>
     <div className="f-connect">
      <p>
        If you have any questions or would like to chat about my projects or
        experiences, feel free to drop me a message. I'd be happy to connect!
      </p>
      </div>
      <h3>Ask Me Anything!</h3>
      <div className="s-connect">
      <p>
        Based on my free time activities, if you have any questions or would like
        to know more about my interests, feel free to ask! I'm always eager to
        share and discuss.
      </p>
      </div>
  </div>
  <div>
    <nav>
    <NavLink to="freeTime">My Free Time</NavLink>
    <NavLink to="contact">Contact me</NavLink>
    </nav>
    <main>
     <Outlet />
    </main>
  </div>
   
 </div>
 )
}



export default HelpLayOut;