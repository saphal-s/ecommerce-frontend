import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const options = {
    loop:true,
    autoplay:7000,
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,

        }
    },
};
export class Latest extends Component {
    render() {
        return (
            <div className="pt-5"> 
            <div className="bg-light">
                <div className="container-fluid bg-light d-flex w-100 p-3 border-bottom">
                    <h3>Barand New Items</h3>
                    <a id="seem" className="pt-4">See More</a>
                </div>
                <OwlCarousel {...options}
                 navText={["<i class='fa arrow-circle-left'><</i>","<i class='fa arrow-right'>></i>"]}
    
                    >
                        <div className="item" >
                            <a href>
                                <img src="images/br.jpg" alt="" />
                                <p id="prp"><span id="hes">Treammer </span>
                                <br /><span id="rs">Price:Rs.1400</span></p>
                            </a>
                        </div>
                        <div className="item">
                            <a href>
                                <img src="images/br1.jpg" alt="" />
                                <p id="prp"><span id="hes">Heal Slipper</span>
                                <br /><span id="rs">Price:Rs.1600</span></p>
                            </a>
                        </div>
                        <div className="item">
                            <a href>
                                <img src="images/br2.jpg" alt="" />
                                <p id="prp"><span id="hes">Vivo Y17</span>
                                <br /><span style={{fontStyle: 'italic'}}>Price:Rs.23999</span></p>
                            </a>
                        </div>
                        <div className="item">
                            <a href>
                                <img src="images/br4.jpg" alt="" />
                                <p id="prp"><span id="hes">Womens Joggers</span>
                                <br /><span id="rs">Price:Rs.900</span></p>
                            </a>
                        </div>
                        <div className="item">
                            <a href>
                                <img src="images/br3.jpg" alt="" />
                                <p id="prp"><span id="hes">Philips Iron</span>
                                <br /><span id="rs">Price:Rs.3500</span></p>
                            </a>
                        </div>
                        <div className="item">
                            <a href>
                                <img src="images/br5.jpg" alt="" />
                                <p id="prp"><span id="hes">Novel Heater</span>
                                <br /><span id="rs">Price:Rs.1740</span></p>
                            </a>
                        </div>
                        <div className="item">
                            <a href>
                                <img src="images/br6.jpg" alt="" />
                                <p id="prp"><span id="hes">Headphone</span>
                                <br /><span id="rs">Price:Rs.900</span></p>
                            </a>
                        </div>
                 </OwlCarousel>
                </div>
            </div>
        )
    }
}

export default Latest
