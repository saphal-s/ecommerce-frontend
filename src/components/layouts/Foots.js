import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import {Link,NavLink} from 'react-router-dom'
function Foots() {
    return (
        <div>
            
            <div id="rowses">
                <div className="container-fluid d-flex  w-100" id="red">
                            <div className="col-12 col-sm-2 p-4">
                                <h4 id="what">Links</h4>
                                <NavLink to="/" activeClassName="active-link" target="_top" id="kx">Home</NavLink><br/>
                                <Link to="/about"  id="kx">About</Link><br/>
                                <Link to="/contact"target="_top"  id="kx">Contact</Link><br/>
                            </div>
                            <div className="col-12 col-sm-2  p-4">
                                <h4 id="what">YesMart Services</h4>
                                <Link to=""  id="kx">Pickup &amp; Delivery</Link><br/>
                                <Link to=""  id="kx">Weekly Add</Link><br/>
                                <Link to=""  id="kx">E-pay</Link><br/>
                                <Link to=""  id="kx">Other Services</Link><br/>
                            </div>
                            <div className="col-12 col-sm-2  p-4">
                                <h4 id="what">YesMart.com</h4>
                                <Link to=""  id="kx">Our Services</Link><br/>
                                <Link to=""  id="kx">Our Ads</Link><br/>
                                <Link to=""  id="kx">Terms of use</Link><br/>
                                <Link to=""  id="kx">Privacy &amp; Security</Link><br/>
                            </div>
                            <div className="col-12 col-sm-3  p-4">
                                <h4 id="what">Customer Services</h4>
                                <Link to=""  id="kx">Help Center</Link><br/>
                                <Link to=""  id="kx">Returns</Link><br/>
                                <Link to=""  id="kx">Product Recalls</Link><br/>
                                <Link to=""  id="kx">Contact Us</Link><br/>
                            </div>
                            <div className="col-12 col-sm-2  p-4 social">
                                <h4 id="what">Follow us</h4>
                                <Link to="" id="so1"><i className="fab fa-facebook-f" /></Link>
                                <Link to="" id="so2"><i className="fab fa-instagram ml-3" /></Link>
                                <Link to="" id="so3"><i className="fab fa-twitter ml-3" /></Link>
                                <Link to="" id="so4"><i className="fab fa-whatsapp ml-3" /></Link>
                            </div>
                        </div>     
            </div>     
               
        </div>
    )
}

export default Foots
