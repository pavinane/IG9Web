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
           <Courseblock
           courseblk= {[
               {
                   id:"course1",
                   img:image1,
                   name:"The FREE Photoshop: Turn GIMP Into Photoshop in No Time"
               },
               {
                id:"course2",
                img:image1,
                name:"pavi"
            },
            {
                id:"course3",
                img:image1,
                name:"pavi"
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
            <div  id={crsblk.id} className="mc-blk-body">
                
                <i class="fas fa-play"/>
                
                
                <div className="body-content-mycourse">
                    <h1>{crsblk.name}</h1> 
                </div>
            </div>
        ))}
    </div>
    
)