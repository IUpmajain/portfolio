
import Portfolio from "../assets/Portfolio.hu_full_logo.png"
import React from 'react'


const Navbar = () => {

  return (

 <nav className="navbar navbar-expand-lg bon mb-5 mb-sm-5">

  <div className="container-fluid">
    <img src={Portfolio} width={90} className="logo" alt="" />

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-lg-auto  mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link box"  aria-current="page" href="#intro">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link box" aria-current="page" href="#skills" >Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link box" aria-current="page" href="#project">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link box" aria-current="page" href="#contact">Contact</a>
        </li>
        
      </ul>
    </div>
    {/* <a className="navbar-brand" href="#">Navbar</a>  */}

  </div>
 </nav>


  )
}

export default Navbar
