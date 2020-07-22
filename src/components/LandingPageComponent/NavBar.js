import React from 'react'

export default function NavBar() {
 

    return (

  

<nav className="navbar navbar-expand-md navbar-light bg-white  fixed-top shadow-sm">
<div class="container">
  <a className="navbar-brand" href="#">International School</a>
  <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav  ml-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#hero">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#teacher">Teacher</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
     
     
    </ul>
    <button className="btn btn-success btn-nav rounded-pill">Get Started</button>
  </div>
  </div>
</nav>

 )
}
