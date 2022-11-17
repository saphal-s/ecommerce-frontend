import React from 'react'
import '../css/mstyle.css';
import {Link} from 'react-router-dom'

function Boysf() {
    return (
        <div>
            <div className="pt-2">
                <div className="bg-light w-100">
                    <div className="container-fluid bg-light d-flex w-100 p-3 border-bottom">
                        <h3>Beauty &amp; Personal Care</h3>
                        <Link id="seem" className="pt-4" to="/more" target="_top">See More</Link >
                    </div>
                    <div className="product pt-5 row" style={{display:'flex',width:'100%',justifyContent:'center'}}>
                    <div className="hell">
                        <div className="crts">
                            <img src="images/b1.jpg"   alt="" />
                            <div className="desc pt-2">
                            <span>Price:Rs.699</span>
                            <p>Hair Conditioners</p>
                            </div>    
                    </div>
                    
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/b3.jpg"   alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.500</span>
                            <p>Nives Aqua Face Wash</p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/b4.webp" alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.450</span>
                            <p>Sunscreens </p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/b5.jpg"  alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.1110</span>
                            <p>Permanent Depalitory Cream  </p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/b6.jpg"  alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.250</span>
                            <p>Vaseline</p>
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
