import React from 'react'
import '../css/mstyle.css';
import {Link} from 'react-router-dom'

function Boysf() {
    return (
        <div>
            <div className="pt-2">
                <div className="bg-light w-100">
                    <div className="container-fluid bg-light d-flex w-100 p-3 border-bottom">
                        <h3>Boys Fashion Items</h3>
                        <Link id="seem" className="pt-4" to="/more" target="_top">See More</Link >
                    </div>
                    <div className="product pt-5 row" style={{display:'flex',width:'100%',justifyContent:'center',margin:'auto'}}>
                    <div className="hell" >
                        <div className="crts">
                        <Link to="/details" id="color" target="_top">
                            <img src="images/m1.jpg" alt="" />
                            <div className="desc pt-2">
                            <span>Price:Rs.899</span>
                            <p>Spring Lite Blue Shirt</p>
                            </div>
                        </Link>     
                    </div>
                    
                    </div>
                    <div className="hell">
                        <div className="crts">
                            <img src="images/m2.webp"  alt="" />
                            <div className="desc pt-2">
                            <span>Price:Rs.1750</span>
                            <p>Blue Geans Pant</p>
                        </div>
                    </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/m3.jpg" alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.800</span>
                            <p>Cotton T-shirt full </p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="img/3.jpg" alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.700</span>
                            <p>Lorem, ipsum dolor sit amet </p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="img/4.jpg" alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.700</span>
                            <p>Lorem, ipsum dolor sit amet </p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="img/5.jpg" alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.700</span>
                            <p>Lorem, ipsum dolor sit amet </p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="img/6.jpg" alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.700</span>
                            <p>Lorem, ipsum dolor sit amet </p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="img/7.jpg" alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.700</span>
                            <p>Lorem, ipsum dolor sit amet </p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="img/8.jpg" alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.700</span>
                            <p>Lorem, ipsum dolor sit amet </p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                            <img src="img/9.webp" alt="" />
                            <div className="desc pt-2">
                            <span>Price:Rs.700</span>
                            <p>Lorem, ipsum dolor sit amet </p>
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
