import React from 'react';

// import Carousel from 'react-elastic-carousel';
import {ImageBox} from '../Course/course_box'
import './poster.scss'
import image1 from '../images/img6.jpg';
import image7 from '../images/img7.jpg';
import image8 from '../images/img8.jpg';
import image9 from '../images/img9.jpg';
import image10 from '../images/img10.jpg';
const Poster = () => (
    <div className="poster-body">
      
        <div className="my-course-block">
            <div className="my-course-block-head">
                <h1>Let's start learning</h1>
                <p>My courses</p>
            </div>
           <Courseblock
           courseblk= {[
               {
                   id:"course1",
                   img:image1,
                   name:"The FREE Photoshop: Turn GIMP Into Photoshop in No Time",
                   time:"31m left",
                   length:"lgh1"
                },
               {
                id:"course2",
                img:image1,
                name:"Learn Ethical Hacking in 2020: Beginner to Advanced!",
                time:" 7h 31m left",
                length:"lgh2"
            },
            {
                id:"course3",
                img:image1,
                name:"After Effects Motion Graphics Beast",
                time:"2h 15m  20s left",
                length:"lgh3"
            },
           
               
           
           ]}
           
           />
        </div>
        <div className="box-sec">
            <h1>Training 5 or more people? <span>Get your team access to Udemy's top 4,000+ courses</span> </h1>
                <div className="label-box-buttons">
                     <button id="business-btn" type="button">Get IG9 for Business</button>
                    <button id="dismis" type="button">dismiss</button>
                </div>
        </div>

        <div className="recommended">
            <div id="recommend-head">
            <h1>What to learn next</h1>
            <h2>Recommended for you</h2>
            </div>
            
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
                butntype:"hr",
                but:"Highest rated"
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
    </div>
);

export default  Poster;



const Courseblock = ({courseblk}) => (
    <div className="my-course-block-content">
        {courseblk.map (crsblk => (
            
                <div className="mc-blk-body">
                    
                        <div id={crsblk.id}>
                            <i class="fas fa-play"/>
                        </div>                
                        <div className="body-content-mycourse">
                            <h1>{crsblk.name}</h1> 
                            <p>{crsblk.time}</p>
                            <div id="time-length">
                                <div id={crsblk.length}>
                                
                                </div>
                            </div>
                        </div>
                    
                    
                </div>
        ))}
    </div>
    
)