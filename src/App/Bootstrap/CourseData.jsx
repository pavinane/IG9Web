import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import '../Course/course.scss';
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';
import image4 from '../images/img4.jpg';
import image5 from '../images/img5.jpg';
// import {Data} from './Data'
// import rating from '../images/4rating.png';






const Business = () => (
   
    <ImageBox
        clis={[
            {
                img:image1,
                head:"The Complete SQL Bootcamp 2020: Go from Zero to Hero",
                author:"jose portilla",
                rat:"4.0",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"bs",
                but:"Bestseller"
            },
            {
                img:image2,
                head:"Tableau 20 Advanced Training: Master Tableau in Data Science ",
                author:"kirill Eremenko, Super Data Science Team",
                rat:"4.0",
                
                views:"(2000)",
                price:"455",
                strike:"(1850)",
                butntype:"hr",
                but:"Highest rated"
            },
            {
                img:image3,
                head:"An Entire MBA in 1 Course:Award Winning Business School Prof ",
                rat:"4.0",
                author:"Chris haroun",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"bs",
                but:"Bestseller"
            },
            {
                img:image4,
                head:"PMP Exam Prep Seminar - PMBOK Guide 6 ",
                rat:"4.0",
                author:"Joseph phillips",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"bs",
                but:"Bestseller"
            },
            {
                img:image5,
                head:"Beginner to Pro in Excel: Financial Modeling and Valuation ",
                rat:"4.0",
                author:"365 careers",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"bs",
                but:"Bestseller"
            },
            {
                img:image5,
                head:"Beginner to Pro in Excel: Financial Modeling and Valuation ",
                rat:"4.0",
                author:"365 careers",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"bs",
                but:"Bestseller"
            },

        ]}
    />
   
);

const Design = () => (
    <ImageBox
        clis={[
            {
                img:image2,
                head:"heading",
                rat:"4.0",
                // rating:rating,
                views:"(2000)",
                price:"455",
                strike:"(1850)",
                butntype:"hr",
                but:"Highest rated"
            },
            {
                img:image1,
                head:"The Complete SQL Bootcamp 2020: Go from Zero to Hero",
                author:"jose portilla",
                rat:"4.0",
                // rating:rating,
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"bs",
                but:"Bestseller"
            },
           
            {
                img:image3,
                head:"heading",
                rat:"4.0",
                // rating:rating,
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"bs",
                but:"Bestseller"
            },
            {
                img:image1,
                head:"heading",
                rat:"4.0",
                // rating:rating,
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"bs",
                but:"Bestseller"
            },
            {
                img:image1,
                head:"heading",
                rat:"4.0",
                // rating:rating,
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"bs",
                but:"Bestseller"
            },

        ]}
    />
);






export const ImageBox = ({ clis }) => (
    <div className="image-box-block">
      {clis.map(imbx => (
       
          <div className="categories-block-1">
            
            <img src={imbx.img} alt=""/>
            <div className="bus-con-1">
              <h1>{imbx.head}</h1>
              <p>{imbx.author}</p>
           </div>
           <div className="bus-ratings">
               <div id="rating-box">
                <h1>{imbx.rat} </h1>
               <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                </div>
                <p>{imbx.views}</p>
                </div> 
          </div>
            <div id="price">
                    <h2><i class="fas fa-rupee-sign"/>{imbx.price} </h2>
                    <p><i class="fas fa-rupee-sign"/>{imbx.strike}</p>
            </div>
             <button id={imbx.butntype}type="button">{imbx.but} </button>
            </div>
      ))}
    </div>
  );
export default Content;



