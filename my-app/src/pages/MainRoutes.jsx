import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";

import Person from "./person";
import Teams from "./teams";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Person />} />;
      <Route path='/team' element={<Teams />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;