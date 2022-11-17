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
                    <div className="hell">
                        <div className="crts">
                        <Link to="/details" id="color" target="_top">
                            <img src="images/l1.jpg" alt="" />
                            <div className="desc pt-2">
                            <span>Price:Rs.899</span>
                            <p>Ladies Top</p>
                            </div>
                        </Link>     
                    </div>
                    
                    </div>
                    <div className="hell">
                        <div className="crts">
                            <img  src="images/l2.jpg" alt="" />
                            <div className="desc pt-2">
                            <span>Price:Rs.1150</span>
                            <p>Blue Geans Pant For Ladies</p>
                        </div>
                    </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/l3.jpg"  alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.1900</span>
                            <p>One Pice </p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/l4.webp"  alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.950</span>
                            <p>Plain Ladies Pant </p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/l5.jpg" alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.730</span>
                            <p>Casual Ladies Top </p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/l12.webp" alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.1500</span>
                            <p>Mini Clasic Ladies Bag-Blue</p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/l7.jpg" alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.1400</span>
                            <p>Ladies Hills Sandals </p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/l8.jpg" alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.2400</span>
                            <p>Shoes For Ladies</p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                        <img src="images/l9.jpg" alt="" />
                        <div className="desc pt-2">
                            <span>Price:Rs.1100</span>
                            <p>Geneva Watches For Womens</p>
                        </div>
                        </div>
                    </div>
                    <div className="hell">
                        <div className="crts">
                            <img src="images/l10.jpg" alt="" />
                            <div className="desc pt-2">
                            <span>Price:Rs.1300</span>
                            <p>Latest Ladies Bag</p>
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
