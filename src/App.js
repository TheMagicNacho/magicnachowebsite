import React from 'react';

// IMPORT LIBRARIES
import { Routes, Route, useParams } from "react-router-dom";

//IMPORT PAGES
import {
  Home,
  About,
  Sink,
  Whoops404
} from "./pages/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Whoops404 />} />
        <Route path="/sink" element={<Sink />} />
        {/* <Route path='/user' element={<UserLanding />} /> 
        <Route path='/user/:id' element={<UserProfile />} /> */}
      </Routes>
    </>


  );
}

export default App;
