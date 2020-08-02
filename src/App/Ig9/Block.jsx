import React from 'react';
import {ImageBox} from '../Course/course_box';
import { Switch, Route,Link } from "react-router-dom";
import image1 from '../images/img6.jpg';
import image7 from '../images/img7.jpg';
import image8 from '../images/img8.jpg';
import image9 from '../images/img9.jpg';
import image10 from '../images/img10.jpg';
import './block.scss';

import {AfterEffectCourseBlock,} from './CourseBlock'

const Blocks = () => (
    <div className="block-content">
        <BlockCont/>
        <FreeBlock/>
        <DBlock/>
        <AftereffectBlock/>
        <JavascriptBlock/>
        <MotiongraphicsBlock/>
        <ShortBlock/>
        <MGcourseBlock/>
        <AfterEffectCourseBlock/>
       
    </div>
);

const BlockCont = () => (
    <div className="block-cont-sec">
        <h1>Student are viewing</h1>
        <ImageBox
            clis={[
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
            {
                img:image8,
                head:"Tableau 20 Advanced Training: Master Tableau in Data Science ",
                author:"kirill Eremenko, Super Data Science Team",
                rat:"4.0",
                
                views:"(2000)",
                price:"455",
                strike:"(1850)",
                butntype:"bs",
                but:"Bestseller"
            },
            {
                img:image9,
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
                img:image10,
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
                img:image1,
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
    </div>
);
const FreeBlock = () => (
    <div className="free-block-cont-sec">
        <h1>Because you enrolled in "<span>The FREE Photoshop: Turn GIMP Into <br/>Photoshop in No Time</span> "</h1>
        <ImageBox
            clis={[
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
            {
                img:image8,
                head:"Tableau 20 Advanced Training: Master Tableau in Data Science ",
                author:"kirill Eremenko, Super Data Science Team",
                rat:"4.0",
                
                views:"(2000)",
                price:"455",
                strike:"(1850)",
                butntype:"bs",
                but:"Bestseller"
            },
            {
                img:image9,
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
                img:image10,
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
                img:image1,
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
    </div>
);
const DBlock = () => (
    <div className="d-block-cont-sec">
        <h1>Top courses in <span> 3D & Animation </span> </h1>
        <ImageBox
            clis={[
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
            {
                img:image8,
                head:"Tableau 20 Advanced Training: Master Tableau in Data Science ",
                author:"kirill Eremenko, Super Data Science Team",
                rat:"4.0",
                views:"(2000)",
                price:"455",
                strike:"(1850)",
                butntype:"none",
                // but:"Bestseller"
            },
            {
                img:image9,
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
                img:image10,
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
                img:image1,
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
    </div>
);
const AftereffectBlock = () => (
    <div className="after-effect-block-cont-sec">
        <h1>Newest course in <span> After Effects </span> </h1>
        <ImageBox
            clis={[
            {
                img:image7,
                head:"The Complete SQL Bootcamp 2020: Go from Zero to Hero",
                author:"jose portilla",
                rat:"4.0",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"new",
                but:"New"
            },
            {
                img:image8,
                head:"Tableau 20 Advanced Training: Master Tableau in Data Science ",
                author:"kirill Eremenko, Super Data Science Team",
                rat:"4.0",
                views:"(2000)",
                price:"455",
                strike:"(1850)",
                butntype:"new",
                but:"New"
            },
            {
                img:image9,
                head:"An Entire MBA in 1 Course:Award Winning Business School Prof ",
                rat:"4.0",
                author:"Chris haroun",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"new",
                but:"New"
            },
            {
                img:image10,
                head:"PMP Exam Prep Seminar - PMBOK Guide 6 ",
                rat:"4.0",
                author:"Joseph phillips",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"new",
                but:"New"
            },
            {
                img:image1,
                head:"Beginner to Pro in Excel: Financial Modeling and Valuation ",
                rat:"4.0",
                author:"365 careers",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"new",
                but:"New"
            },

            ]}
            />
    </div>
);
const JavascriptBlock = () => (
    <div className="java-script-block-cont-sec">
        <h1>Because you searched for"<span> javascript </span>" </h1>
        <ImageBox
            clis={[
            {
                img:image7,
                head:"The Complete SQL Bootcamp 2020: Go from Zero to Hero",
                author:"jose portilla",
                rat:"4.0",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"none",
               
            },
            {
                img:image8,
                head:"Tableau 20 Advanced Training: Master Tableau in Data Science ",
                author:"kirill Eremenko, Super Data Science Team",
                rat:"4.0",
                views:"(2000)",
                price:"455",
                strike:"(1850)",
                butntype:"hot",
                but:"Hot & new"
            },
            {
                img:image9,
                head:"An Entire MBA in 1 Course:Award Winning Business School Prof ",
                rat:"4.0",
                author:"Chris haroun",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"none",
            },
            {
                img:image10,
                head:"PMP Exam Prep Seminar - PMBOK Guide 6 ",
                rat:"4.0",
                author:"Joseph phillips",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"none",
            },
            {
                img:image1,
                head:"Beginner to Pro in Excel: Financial Modeling and Valuation ",
                rat:"4.0",
                author:"365 careers",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"none",
            },

            ]}
            />
    </div>
);

const MotiongraphicsBlock = () => (
    <div className="motion-graphics">
        <h1>Featured courses in <span> Motion Graphics</span>   </h1>
        <MotionEffect
        conlis={[
            {
                link:"/mainpage",
                a:"Most Popular"
            },
            {
                link:"/mainpage/intermediate",
                a:"Intermediate & advantage"
            },
           
        ]}
        />
        <div className="motion-category-route">
            <Switch>
              <Route
                exact
                path="/mainpage"
                component={Popular}
              />
               <Route
                exact 
                path="/mainpage/intermediate"
                component={Intermediate}
              />
            </Switch>
          </div>
    </div>
);


const MotionEffect= ({conlis}) => (
    <div className="motion-list">
        {conlis.map (cl => (
            <Link to ={cl.link} activeStyle={{ color: "black" }}>
             <div className="mot-list-section">
                <ul>
                    <li>{cl.a}</li>
                </ul>
            </div>
            </Link>
           
        ))}
    </div>
);



const Popular = () => (
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
const Intermediate = () => (
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

const ShortBlock = () => (
    <div className="java-script-block-cont-sec">
        <h1>Short and Sweet course for you </h1>
        <ImageBox
            clis={[
            {
                img:image7,
                head:"The Complete SQL Bootcamp 2020: Go from Zero to Hero",
                author:"jose portilla",
                rat:"4.0",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"none",
               
            },
            {
                img:image8,
                head:"Tableau 20 Advanced Training: Master Tableau in Data Science ",
                author:"kirill Eremenko, Super Data Science Team",
                rat:"4.0",
                views:"(2000)",
                price:"455",
                strike:"(1850)",
                butntype:"bs",
                but:"Bestseller"
            },
            {
                img:image9,
                head:"An Entire MBA in 1 Course:Award Winning Business School Prof ",
                rat:"4.0",
                author:"Chris haroun",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"none",
            },
            {
                img:image10,
                head:"PMP Exam Prep Seminar - PMBOK Guide 6 ",
                rat:"4.0",
                author:"Joseph phillips",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"none",
            },
            {
                img:image1,
                head:"Beginner to Pro in Excel: Financial Modeling and Valuation ",
                rat:"4.0",
                author:"365 careers",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"none",
            },

            ]}
            />
    </div>
);


const MGcourseBlock = () => (
    <div className="motion-graphics-course">
        <h1>Featured courses in <span> Motion Graphics</span>   </h1>
        <MotionGraph
        conlis={[
            {
                link:"/mainpage",
                a:"After Efftects"
            },
            {
                link:"/mainpage/adobemuse",
                a:"Adobe mouse"
            },
            {
                // link:"/mainpage/Adobemuse",
                a:"Digital Compositing"
            },
            {
                // link:"/mainpage/Adobemuse",
                a:"VFX Compositing"
            },
            {
                // link:"/mainpage/Adobemuse",
                a:"VFX Visual Effect"
            },
           
        ]}
        />
        <div className="motion-category-course-list">
            <Switch>
              <Route
                exact
                path="/mainpage"
                component={AfterEffect}
              />
               <Route
                exact 
                path="/mainpage/Adobemuse"
                component={Adobemuse}
              />
            </Switch>
          </div>
    </div>
);

const MotionGraph= ({conlis}) => (
    <div className="motion-graph-list">
        {conlis.map (cl => (
            <Link to ={cl.link} activeStyle={{ color: "black" }}>
             <div className="mot-graph-list-section">
                <ul>
                    <li>{cl.a}</li>
                </ul>
            </div>
            </Link>
           
        ))}
    </div>
);
const AfterEffect = () => (
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
const Adobemuse = () => (
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


export default Blocks;