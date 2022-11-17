import React from 'react'
import '../css/mstyle.css';
import {Link} from 'react-router-dom'

function Boysf() {
    return (
        <div>
            <div className="pt-2">
                <div className="bg-light w-100">
                    <div className="container-fluid bg-light d-flex w-100 p-3 border-bottom">
                        <h3>Home &amp; Furnitures</h3>
                        <Link id="seem" className="pt-4" to="/more" target="_top">See More</Link >
                    </div>
                    <div className="product pt-5 row" style={{display:'flex',width:'100%',justifyContent:'center',margin:'auto'}}>
                    <div className="hell">
                        <div className="crts">
                            <img src="images/f1.webp"  alt="" />
                            <div className="desc pt-2">
                            <span>Price:Rs.96000</span>
                            <p>Royal Wing Chair</p>
                            </div>    
                        </div>
                    
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img  src="images/f4.jpg"  alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.38500</span>
                            <p>3-pice Daraz</p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/f2.jpg" alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.90000</span>
                            <p>Double Bed </p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/f3.jpg"  alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.50000</span>
                            <p>Dining Table</p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/f5.jpg"  alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.30000</span>
                            <p>Modern tempered glass </p>
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
