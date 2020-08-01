import React from 'react';
import {ImageBox} from '../Course/course_box'
import image1 from '../images/img6.jpg';
import image7 from '../images/img7.jpg';
import image8 from '../images/img8.jpg';
import image9 from '../images/img9.jpg';
import image10 from '../images/img10.jpg';
import './block.scss';

const Blocks = () => (
    <div className="block-content">
        <BlockCont/>
        <FreeBlock/>
        <DBlock/>
        <AftereffectBlock/>
        <JavascriptBlock/>
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
                but:"new"
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
                but:"new"
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
                but:"new"
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
                but:"new"
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
                but:"new"
            },

            ]}
            />
    </div>
);
const JavascriptBlock = () => (
    <div className="java-script-block-cont-sec">
        <h1>Because you searched for"<span> javascript </span>"" </h1>
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


export default Blocks;