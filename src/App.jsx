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
import FAQ from './pages/contact/freeTime';
import Contact from './pages/contact/Contact';

//layout
import HelpLayOut from './layouts/HelpLayOut';
import RootLayOut from './layouts/rootLayOut';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayOut />}>
        <Route path="FAQ" element={<FAQ />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;







