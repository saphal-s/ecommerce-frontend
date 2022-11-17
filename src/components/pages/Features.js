import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

function Features() {
    return (
        <div>
            <div className="container pt-5 pb-5">
            <div className="row">
                <div className="col-md-4 d-flex">
                    <i className="fa fa-exchange "/> 
                        <p><span id="ret">Return with in 7 days</span> of receiving your order.</p>
                </div>
                <div className="col-md-4 d-flex">
                    <i className="fa fa-truck" />
                    <p><span id="ret">Get free delivery for every</span> order on more than price.</p>
                </div>
                <div className="col-md-4 d-flex">
                    <i className="fa fa-credit-card-alt" />
                    <p> <span id="ret"> Pay Online through multiple</span> payment option(card/e-pay).</p>
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default Features
