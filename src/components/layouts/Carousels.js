import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import {Carousel} from 'react-bootstrap';

function Carousels() {
    return (
        <div>
            <div className="container-fluid pt-5 carousel">
                
            <div id="carouselExampleFade" className="carousel slide carousel-fade pt-2" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/1.gif" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/5.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/4.gif" className="d-block w-100" alt="..." />
                    </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Carousels
