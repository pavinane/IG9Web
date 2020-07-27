import React from 'react';
import {ImageBox} from './course_box';
import './student.scss';
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';
import image4 from '../images/img4.jpg';
import image5 from '../images/img5.jpg';


class StudentView extends React.Component{
        render(){
            return(
                <div id="student-block-box">
                    <div className="student-view-block">
                        <div className="view-block">
                            <h1>Student are Viewing</h1>
                            <ImageBox
                                clis={[
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
                            ]}
                        />
                         </div>
                        <div className="search-block">
                        <h1>Because you searched for " <span>javascript</span>"</h1>
                        <ImageBox
                                clis={[
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

                            ]}
                        />
                         </div>
                    </div>
                    <div className="tips-picks-block">
                        <h1>Get personal learning recommendations</h1>
                        <p>Answer a few questions for your top picks</p>
                        <button id="get-start" type="button">Get start</button>
                    </div>
                </div>
            )
        }
}   
export default StudentView;
