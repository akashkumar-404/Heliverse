import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      

      <div>
       
        <Link to="/team"><button style={{padding:"15px",color:"white",backgroundColor:"black"}}>Teams</button></Link>
      </div>
    </div>
  );
};

export default Navbar;