import React from 'react';
// import {Box} from '../Course/home_page';
import './poster.scss'
import image1 from '../images/img1.jpg';

const Poster = () => (
    <div className="poster-body">
        {/* <Box/> */}
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
    </div>
);

export default  Poster;



const Courseblock = ({courseblk}) => (
    <div className="my-course-block-content">
        {courseblk.map (crsblk => (
            <div   className="mc-blk-body">
                <div id={crsblk.id}>
                    <i class="fas fa-play"/>
                </div>                
                <div className="body-content-mycourse">
                    <h1>{crsblk.name}</h1> 
                    <p>{crsblk.time}</p>
                    <div id="time-length">
                        <div id={crsblk.length}>
        <h1>{}</h1>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
    
)