import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/cstyle.css';
import '../css/astyle.css';
import Navone from '../layouts/Navone';
import Footers from '../layouts/Footers';

function Contacts() {
    return (
        <div>
            <Navone/>
            <section className="contact">
                    <div className="content">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi reprehenderit quisquam asperiores. Totam reiciendis sed, quia at fugiat corrupti eveniet, o
                        fficia odio assumenda qui, voluptatum quis ducimus aspernatur cupiditate.</p>
                    </div>
                    <div className="container">
                    <div className="contactInfo">
                        <div className="box">
                        <div className="icon"><i className="fas fa-map-marker-alt" /></div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>New Road,<br />Kathmandu Nepal</p>
                        </div>
                        </div>
                        <div className="box">
                        <div className="icon"><i className="fas fa-phone" /></div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>234567890</p>
                        </div>
                        </div>
                        <div className="box">
                        <div className="icon"><i className="far fa-envelope" /></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>abc99@gmail.com</p>
                        </div>
                        </div>
                    </div>
                    <div className="contactForm">
                        <form action>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" name id required />
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name id required />
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea name id cols="auto" rows="auto" required defaultValue={""} />
                            <span>Type your Messgae</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Send" />
                        </div>
                        </form>
                    </div>
                    </div>
                </section>
            <Footers/>
        </div>
    )
}

export default Contacts
