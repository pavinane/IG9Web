import React from 'react';
import Slider from 'react-slick';
import image1 from '../images/cate1.jpg';
import image2 from '../images/cate2.jpg';
import image3 from '../images/cate3.jpg';
import image4 from '../images/cate4.jpg';
import image5 from '../images/cate5.jpg';
import './slick.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {List} from '../Ig9/catelist';
import {Dev,Dev2} from '../Ig9/capoption'

 const Data = [
    { img:image2,head:"heading",rat:"4.0",views:"(2000)",price:"455",strike:"(1850)", butntype:"hr",but:"Highest rated"},
    {img:image1,head:"The Complete SQL Bootcamp 2020: Go from Zero to Hero",author:"jose portilla",rat:"4.0",views:"(1997)",price:"455",strike:"(1995)",butntype:"bs", but:"Bestseller" },
    {img:image3,head:"heading", rat:"4.0",views:"(1997)",price:"455", strike:"(1995)",butntype:"bs",but:"Bestseller"},
    {img:image4, head:"heading",rat:"4.0",views:"(1997)",price:"455",strike:"(1995)",butntype:"bs",but:"Bestseller"},
    {img:image5,head:"heading", rat:"4.0",views:"(1997)",price:"455",strike:"(1995)",  butntype:"bs", but:"Bestseller"},
    {img:image3,head:"heading", rat:"4.0",views:"(1997)",price:"455", strike:"(1995)",butntype:"bs",but:"Bestseller"},
    {img:image4, head:"heading",rat:"4.0",views:"(1997)",price:"455",strike:"(1995)",butntype:"bs",but:"Bestseller"},
    {img:image5,head:"heading", rat:"4.0",views:"(1997)",price:"455",strike:"(1995)",  butntype:"bs", but:"Bestseller"},
]


class SimpleSlider extends React.Component {
    render() {
      const settings = {
        dots: true,
        // infinite: true,
        // speed: 500,
        arrows:true,
        slidesToShow: 4,
        slidesToScroll: 2,
        className:"slides"
      };
      return (
          <div className="slides-block">
            <Slider {...settings}>
         {Data.map((photo) => (
               <div id="categories-block-1">
            
               <img src={photo.img} alt=""/>
               <div className="bus-con-1">
               <h1>{photo.head}</h1>
               <p>{photo.author}</p>
                </div>
                   <div className="bus-ratings">
               <div id="rating-box">
                   <h1>{photo.rat} </h1>
               <div>
                   <span class="fa fa-star checked"></span>
                   <span class="fa fa-star checked"></span>
                   <span class="fa fa-star checked"></span>
                   <span class="fa fa-star checked"></span>
                   <span class="fa fa-star"></span>
                   </div>
                   <p>{photo.views}</p>
                   </div> 
           </div>
               <div id="price">
                       <h2><i class="fas fa-rupee-sign"/>{photo.price} </h2>
                       <p><i class="fas fa-rupee-sign"/>{photo.strike}</p>
               </div>
               <button id={photo.butntype}type="button">{photo.but} </button>
           </div>
         ))}
         </Slider>
          </div>
        
        
      );
    }
  }






const Practice  = () => (
  <div>
      <SimpleSlider/>   
  </div>
);

export default Practice ;