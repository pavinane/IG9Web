import React from 'react';
import {ImageBox} from '../Course/course_box';
import { Switch, Route,Link } from "react-router-dom";
import image1 from '../images/img6.jpg';
import image7 from '../images/img7.jpg';
import image8 from '../images/img8.jpg';
import image9 from '../images/img9.jpg';
import image10 from '../images/img10.jpg';




export const AfterEffectCourseBlock = () => (
    <div className="after-effect-course">
        <h1>Featured courses in <span> After Effects</span>   </h1>
        <Aftereffectcourse
        conlis={[
            {
                link:"/mainpage",
                a:"Most Popular"
            },
            {
                link:"/mainpage/new",
                a:"New"
            },
            {
                link:"/mainpage/advantage",
                a:"Intermediate & Advantage"
            },
            
           
        ]}
        />
        <div className="after-effect-category-course-list">
            <Switch>
              <Route
                exact
                path="/mainpage"
                component={AfterEffectcour}
              />
               <Route
                exact 
                path="/mainpage/new"
                component={New}
              />
              <Route
                exact 
                path="/mainpage/advantage"
                component={InterAdavan}
              />
            </Switch>
          </div>
    </div>
);

const Aftereffectcourse =({conlis}) => (
    <div className="after-effect-list">
        {conlis.map (cl => (
            <Link to ={cl.link} activeStyle={{ color: "black" }}>
             <div className="after-effect-list-section">
                <ul>
                    <li>{cl.a}</li>
                </ul>
            </div>
            </Link>
           
        ))}
    </div>
);
const AfterEffectcour = () => (
    <ImageBox
        clis={[
            
           
            {
                img:image8,
                head:"heading",
                rat:"4.0",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"bs",
                but:"Bestseller"
            },
            {
                img:image9,
                head:"heading",
                rat:"4.0",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"bs",
                but:"Bestseller"
            },
            {
                img:image10,
                head:"heading",
                rat:"4.0",
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
                views:"(2000)",
                price:"455",
                strike:"(1850)",
                butntype:"hr",
                but:"Highest rated"
            },
            {
                img:image7,
                head:"The Complete SQL Bootcamp 2020: Go from Zero to Hero",
                author:"jose portilla",
                rat:"4.0",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"bs",
                but:"Bestseller"
            },

        ]}
    />
);
const New = () => (
    <ImageBox
        clis={[
            {
                img:image1,
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
                img:image7,
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
                img:image8,
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
                img:image9,
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
                img:image10,
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
const InterAdavan = () => (
    <ImageBox
        clis={[
            {
                img:image1,
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
                img:image7,
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
                img:image8,
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
                img:image9,
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
                img:image10,
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


export const Tech = () => (
    <div className="tech-block">
        <div id="tech-id">
            <div className="t-block-sec">
                <h1>Teach the world online</h1>
                <p>Create an online video course, reach students across the globe, and earn money</p>
            </div>
            <button id ="tec" type="button">Tech on IG9</button>
        </div>
        
    </div>
)