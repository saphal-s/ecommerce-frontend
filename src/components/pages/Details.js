import React from 'react'
import Foots from '../layouts/Foots';
import Footers from '../layouts/Footers';
import Navbar from '../layouts/Navbar';
import '../css/styled.css';
import '../css/style.css';
import ReactImageMagnify from 'react-image-magnify';
function Details() {
    const imageProps = {
        smallImage: {
          alt: 'Phasellus laoreet',
          isFluidWidth: true,
          src: 'images/m1.jpg',
          width: 300,
          height: 350
        },
        largeImage: {
          src: 'images/m1.jpg',
          width: 1100,
          height: 1800
        },
        enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
      };

    return (

       <div>
        <Navbar/>
        <div className="container mt-4  pt-5">
          <div className="row mt-4 ">
            <div className="col-md-5">
              <ReactImageMagnify {...imageProps} />
            </div>
            <div className="col-md-7 hi ">
              <button id='new'>New</button>
              <p className="title">Men's Summer Shirt-Sky Blue</p>
              <p><span id="bol">Product Code :</span> 001cf </p>
              <p><span id="bol">Price :</span>:900</p>
              <p><span id="bol">Aviliability :</span>In Stock</p>
              <p><span id="bol">Brand :</span> abc company</p>
              <p><span id="bol">Size:</span><select name="size" id="">
                    <option value="xl">L</option>
                    <option value="xl">XL</option>
                    <option value="xl">XXL</option>
                  </select></p>
              <div className="bc">
                    <button className="buy">Buy Now</button>
                    <button className="cart">Add To Cart</button>
                </div>
            </div>
          </div>
      </div>
    <div className="pd ">
        <p className="pds">Product Description</p>
        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet nisi aliquet, tincidunt metus eget, 
        bibendum dui. Phasellus a hendrerit lectus, sit amet porttitor enim. Duis convallis eu erat quis sodales. Vestibulum pharetra sagittis nisl.
         Nullam a arcu ac quam vestibulum ultricies sed vel quam. Fusce ac malesuada nibh. Suspendisse facilisis ex eu ligula vulputate porttitor. 
         Vestibulum vitae aliquet ligula, quis viverra sem. Nullam at ligula nec enim tempor luctus. Nunc et magna ut magna fringilla fermentum vestibulum 
         vitae ex. Morbi tempus enim dolor, quis vehicula odio feugiat non.</p>
         <div className="match">
            <button id="similar">Similar</button>
        </div>
        <div className="product pt-5 row" style={{display:'flex',width:'100%',margin:'auto'}}>

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
                        <img src="img/6.jpg" alt="" />
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
                </div>  
      </div>
      
    <br/><br/>
            <Foots/>
            <Footers/>
       </div>
    )
}

export default Details
