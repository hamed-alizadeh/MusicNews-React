import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'
import React from "react";

//pages
import Home from "./pages/home/Home";
import About from "./pages/About";
import FAQ from './pages/freeTime';
import Contact from './pages/contact';
import Error from './pages/Error';

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
       <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;







