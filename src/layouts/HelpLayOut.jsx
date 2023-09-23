import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HelpLayOut () {
 return (
 <div className="help-layout">
  <div className="connection">
    <h2>contact me</h2>
    <p>Connection paths that I will put here! jgjsbjkdn asbd; dk.bs;d sd disdhjwq 90iojasdb asd assdsad</p>
  </div>
  <div>
    <nav>
    <NavLink to="FAQ">My Free Time</NavLink>
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