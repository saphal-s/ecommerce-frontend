import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/astyle.css';
import {Link} from 'react-router-dom'

function Navone() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light " id="light">
        <div className="container-fluid">
          <Link className="navbar-brand text-white " to="/" id="mar">YesMart </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/about" >About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/contact" >Contact</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  YesMart Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="drop">
                  <li><a className="dropdown-item" href="#">Picup &amp; Delivery</a></li>
                  <li><a className="dropdown-item" href="#">Weekly Add</a></li>
                  <li><a className="dropdown-item" href="#">E-pay</a></li>
                  <li><a className="dropdown-item" href="#">Other Services</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  YesMart.com
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="drop">
                  <li><a className="dropdown-item" href="#">Our Services</a></li>
                  <li><a className="dropdown-item" href="#">Our Ads</a></li>
                  <li><a className="dropdown-item" href="#">Terms of use</a></li>
                  <li><a className="dropdown-item" href="#">Privacy &amp; security</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Customer Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="drop">
                  <li><a className="dropdown-item" href="#">Help Center</a></li>
                  <li><a className="dropdown-item" href="#">Returns</a></li>
                  <li><a className="dropdown-item" href="#">Product Recalls</a></li>
                  <li><a className="dropdown-item" href="#">Contact Us</a></li>
                  <li><a className="dropdown-item" href="#">Store Pickup</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Enter your email to subscribe" aria-label="Search" id="sub" />
              <button className="btn btn-outline-dark" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Navone
