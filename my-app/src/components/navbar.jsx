import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../pages/searchbarmain";

const Navbar = () => {
  return (
    <div>
      

      <div style={{display:'flex',justifyContent:'space-between',backgroundColor:"teal"}}>
       
        <Link to="/team" style={{textDecoration:'none'}}><Button style={{padding:"15px",color:"white",backgroundColor:"red"}} variant="contained">Teams</Button></Link>
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;