import React from 'react'
import '../css/mstyle.css';
import {Link} from 'react-router-dom'

function Boysf() {
    return (
        <div>
            <div className="pt-2">
                <div className="bg-light w-100">
                    <div className="container-fluid bg-light d-flex w-100 p-3 border-bottom">
                        <h3>Laptops &amp; Smart Phones</h3>
                        <Link id="seem" className="pt-4" to="/more" target="_top">See More</Link >
                    </div>
                    <div className="product pt-5 row" style={{display:'flex',width:'100%',justifyContent:'center',margin:'auto'}}>
                    <div className="hell">
                        <div className="crts">
                            <img  src="images/e1.jpg"   alt="" />
                            <div className="desc pt-2">
                            <span>Price:Rs.96000</span>
                            <p>Asus B8430UA-6500U</p>
                            </div>    
                    </div>
                    
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/e2.jpg"   alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.90000</span>
                            <p>MacBook i5</p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/e3.webp" alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.105000</span>
                            <p>Dell 2-in-1</p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img  src="images/e5.png" alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.30000</span>
                            <p>Redmi Note 9 Pro</p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/e6.jpg"  alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.74999</span>
                            <p>Samsung Galaxy S10</p>
                        </div>
                        </div>
                    </div>
                    
                </div>  
                    
                </div>
            </div>  
        </div>    
       
    )
}

export default Boysf
