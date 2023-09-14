import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function RootLayOut() {
return (
  <div className="root-layout">
    <header>
      
      <nav className="navbar">
        <div className="top-head">
        <img id="top-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7tuzqV0VHV3P0vUKMb3s4CYmV0a6XYjEpw&usqp=CAU" />
        <h1 id="top-head">My.Resume </h1>
       
       </div>
        <NavLink to="/">Home page</NavLink>
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/help">contact me</NavLink>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);
}

export default RootLayOut;
