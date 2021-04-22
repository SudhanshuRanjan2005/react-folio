import React from 'react'
import "./css/Header.css"
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="nav ">
        <div className="left">
        <Link className="nav-link" to="/">Sudhanshu Ranjan</Link>
        </div>

        <div className="right">
        <Link className="nav-link right-link" to="/">Home</Link>
        <Link className="nav-link right-link" to="/about">About Me</Link>
        <Link className="nav-link right-link" to="#">Contact Me</Link>
          <div className="dropdown">
            <button className="btn btn-light bi bi-code-slash" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

            </button>
             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link className="dropdown-item" to="/">Home</Link></li>
                <li><Link className="dropdown-item" to="/about">About</Link></li>
                <li><Link className="dropdown-item" to="#">Contact Me</Link></li>
            </ul> 
          </div>
        </div>
      </nav>
    </div>
  )
}
