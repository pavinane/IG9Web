import React, { Component} from 'react'
// import { Switch, Route, Link } from "react-router-dom";
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';
import image4 from '../images/img4.jpg';
import image5 from '../images/img5.jpg';

// import Studentviews from '../Course/Studentview';
// import {Data} from './Data';
// import Course from './CourseData'
import './index.scss';
// import Slider from 'react-slick';
// import Carousel from 'react-bootstrap/Carousel';
// import Carousel from 'react-elastic-carousel';

//


         


class Home extends React.Component {
    render() {
        return(
            
            <div>
                
                <Business/>
             
            </div>
                      
            
        );
    }
}

const design = [
    { img:image2,head:"heading",rat:"4.0",views:"(2000)",price:"455",strike:"(1850)", butntype:"hr",but:"Highest rated"},
    {img:image1,head:"The Complete SQL Bootcamp 2020: Go from Zero to Hero",author:"jose portilla",rat:"4.0",views:"(1997)",price:"455",strike:"(1995)",butntype:"bs", but:"Bestseller" },
    {img:image3,head:"heading", rat:"4.0",views:"(1997)",price:"455", strike:"(1995)",butntype:"bs",but:"Bestseller"},
    {img:image4, head:"heading",rat:"4.0",views:"(1997)",price:"455",strike:"(1995)",butntype:"bs",but:"Bestseller"},
    {img:image5,head:"heading", rat:"4.0",views:"(1997)",price:"455",strike:"(1995)",  butntype:"bs", but:"Bestseller"},
]

export const Business = () => (
   
    <div className="image-box-block">
       
      {design.map(imbx => (
       
             <div id="categories-block-1">
            
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


// const Content = () => (
//     <div className="content-box">
//         <div className="content-box-header">
//             <h1>The world's largest selection of courses</h1>
//             <p>Choose from 100000 online videos courses with new additions published every<br/> month</p>
//         </div>
     
//         <Contentlist
//         conlis={[
//             {
//                 link:"/",
//                 a:"Business"
//             },
//             {
//                 link:"/design",
//                 a:"Design"
//             },
//             {
//                 a:"Photography"
//             },
//             {
//                 a:"development"
//             },
//             {
//                 a:"Marketing"
//             },
//             {
//                 a:"IT & Software"
//             },
//             {
//                 a:"Personal Development"
//             },
//         ]}
//         />
//          <div className="content-category-route">
//             <Switch>
//               <Route
//                 exact
//                 path="/"
//                 component={Business}
//               />
              
//             </Switch>
//           </div>
      
//     </div>
// );


// export const Contentlist = ({conlis}) => (
//     <div className="content-list">
//         {conlis.map (cl => (
//             <Link to ={cl.link} activeStyle={{ color: "black" }}>
//              <div className="con-list-section">
//                 <ul>
//                     <li>{cl.a}</li>
//                 </ul>
//             </div>
//             </Link>
           
//         ))}
//     </div>
// );

// const imageSlice = [
//         { name:"image1",img:image1 },
//         {name:"image2",img:image2 },
//         {name:"image3",img:image3 },
//         {name:"image4",img:image4 },
//         { name:"image5",img:image5 },
// ]

// class Slick extends React.Component {
//     render () {
//         const setting = {
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
        
//             arrow:true,
//             // className:"slides"
            
//         }
//         return(
//             <Slider {...setting}>
//                 {imageSlice.map ((item) => {
//                     return(
//                         <div key={item.id}>
//                         {item.title}
//                         <img src={item.img} alt=""/>
//                     </div>
//                     )
//     })}
//             </Slider>
//         )
//     }
// }

export default Home





