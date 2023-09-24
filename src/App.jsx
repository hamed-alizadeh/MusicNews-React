import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'
import React from "react";

//pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import freeTime from './pages/contact/freeTime';
import Contact from './pages/contact/Contact';
import Login from './pages/Login/Login'; 
import SignUp from './pages/Login/SignUp';

//layout
import HelpLayOut from './layouts/HelpLayOut';
import RootLayOut from './layouts/RootLayOut';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayOut />}>
        <Route path="freeTime" element={<freeTime />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="SignUp" element={<SignUp />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;







