import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Navication = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <>
 <nav className="navbar navbar-expand-lg  border-bottom border-1 navbar-dark border-info bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center text-danger" id="navbarTogglerDemo01">
      {/* <Link className="navbar-brand" href="#">Hidden brand</a> */}
      <ul className="nav  navbar-nav text-center ">
         <li className="nav-item">
           <Link to='all' className={`nav-link ${splitLocation[1] === "all" ? "active" : ""}`}>ALL</Link>
         </li>
         <li className="nav-item">
           <Link to='/full-stack-development' className={`nav-link ${splitLocation[1] === "full-stack-development" ? "active" : ""}`} >FULL STACK DEVELOPEMENT</Link>
         </li>
         <li className="nav-item">
           <Link to="/data-science" className={`nav-link ${splitLocation[1] === "data-science" ? "active" : ""}`}>DATA SCIENCE</Link>
         </li>
         <li className="nav-item">
           <Link to='/cyber-security' className={`nav-link ${splitLocation[1] === "cyber-security" ? "active" : ""}`}>CYBER SECURITY</Link>
         </li>
         <li className="nav-item">
           <Link to='/carrer'  className={`nav-link ${splitLocation[1] === "carrer" ? "active" : ""}`}>CARRER</Link>
         </li>
      </ul>
    
    </div>
  </div>
</nav>
    </>
  )
}

export default Navication