import React from 'react';
import {Box} from '../Course/home_page';
import './poster.scss'
import image1 from '../images/img1.jpg';

const Poster = () => (
    <div className="poster-body">
        <Box/>
        <div className="my-course-block">
            <div className="my-course-block-head">
                <h1>Let's start learning</h1>
                <p>My courses</p>
            </div>
            <div className="my-course-block-content">
                <div className="mc-blk-body">
                    <img src={image1} alt=""/>
                    <div className="body-content-mycourse">
                        <h1>name of the course</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default  Poster;

// cosnt Courseblock = ({courseblk}) => (
//     <div className="my-course-block-content">
//         {courseblk.map( => (

//         ))}
//     </div>
// )