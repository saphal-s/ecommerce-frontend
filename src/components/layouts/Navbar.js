import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import { Button,Form } from 'react-bootstrap';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-primary col-md-12"id="navs">
                <div className="container-fluid navs">
                <NavLink className="navbar-brand " to="/"  activeClassName="nav-active" ><span id="cate">YesMart</span></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" style={{position:'relative'}}>
                    <input className="form-control ser me-2" type="search" placeholder="Search products" aria-label="Search" />
                    <button className="btn buttom" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                        <Link className="nav-link active " aria-current="page" href="#" id="heart"><i className="far fa-heart"></i> My Items</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link active " href="#" id="ab"><i className="fas fa-shopping-cart"></i> Cart</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link active" aria-current="page" href="#" id="ab" data-bs-toggle="modal" data-bs-target="#example"><i className="fas fa-sign-in-alt"></i> Sign Up</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link active" href="#" id="ab" data-bs-toggle="modal" data-bs-target="#modelexample"><i className="fas fa-user-plus" ></i> Log In</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        <div className="modal fade" id="example" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title reg" id="exampleModalLabel">Register Now!</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
              <Form>
                  <Form.Group controlId="formBasicEmail">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                 <div className="btnss">
                 <Button className="btns" type="submit">
                    Register
                  </Button>
                 </div>
              </Form>
              </div>
            </div>
          </div>
        </div>
        {/* login model */}
        
        {/* Modal */}
        <div className="modal fade" id="modelexample" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title reg" id="exampleModalLabel">Login Now!</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
              <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                 <div className="btnss">
                 <Button className="btns" type="submit">
                  Login
                  </Button>
                  <hr/>
                  <div>
                    <h4 id="gool"><i className="fab fa-google" /> Log in with google</h4>
                  </div>
                 </div>
              </Form>
              </div>
            </div>
          </div>
        </div>
            
        </div>
    )
}

export default Navbar
