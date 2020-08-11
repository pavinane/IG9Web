import React from 'react';
import {ProfileHeader} from './header'
import { BrandTag, Footer} from './Footer'
import { Switch, Route, Link } from "react-router-dom";
import './mycourse.scss';
import {Business} from '../Course/course_box';

const MyCourse = () => (
    <div className="my-course-blocks">
        <ProfileHeader/>
        <MyCourseBlock/>
        <BrandTag/>
        <Footer/>
    </div>
);

const MyCourseBlock = () => (
    <div className="course-block-box">
        <div className="my-cou-box-sec1">
           <h1> My Course</h1>
            <MyCourseList
            mycurls={[
                {
                  link:"/mycourse",
                  li:"allcourse"

                },
                {
                    link:"/mycourse/collection",
                    li:"collection"
                },
                {
                    link:"/mycourse/wishlist",
                    li:"wishlist"
                },
                {
                    link:"/mycourse/archived",
                    li:"archived"
                },
            ]}
            />
        </div>
        <div id="co-box-id" className="my-cou-box-sec2">
            <Switch>
            <Route
                exact
                path="/mycourse"
                component={Business}
              />
               <Route
                exact
                path="/mycourse/collection"
                component={Collection}
              />
               <Route
                exact
                path="/mycourse/wishlist"
                component={Wishlist}
              />
              <Route
                exact
                path="/mycourse/archived"
                component={Archive}
              />
            </Switch>
        </div>
    </div>
);

const Collection = () => (
    <div className="archive">
        <h1>Focus on only the courses that matter to you.</h1>
        <Link to ="/mycourse">
            <p>Go to the All Courses <span>tab to archive.</span> </p>
        </Link>
        <video src="https://mp4-a.udemycdn.com/2016-10-10_18-01-11-cb7c4890d3b585d3a6637d81b9a285b0/WebHD_1080.mp4?rvJszzFXAywYPjRsWlin5bjjr-6pH123VNfwwM29_327_ffpFMX6QiUvtLw61iwIUsF1Mzh9HwsP6FErH4PT2lfe3W6bfDecZpWgvXKDfqy3JL4qgAsaG6yOFG6NE-UXRKpccG4aa3DxuR98sJpHv8i_fqTz6jeC4uat8iC6M1g2jA%22" width="600" height="500" controls>
     </video>
    </div>
);
const Wishlist = () => (
    <div className="wish-list">
        {/* <Link to ='./mainpage'> */}
         <button className="wishlist alert-danger" type="button">Browse course now</button>
        {/* </Link> */}
        
    </div>
   
);

const Archive = () => (
    <div  className="archive">
        <h1>Focus on only the courses that matter to you.</h1>
         <Link to ="/mycourse">
             <p>Go to the All Courses <span>tab to archive.</span> </p>
         </Link>
        
    </div>
);

const MyCourseList = ({mycurls}) => (
    <div className="my-cur-box">
        {mycurls.map(mycr => (
            <Link to = {mycr.link}>
                <div className="my-cour-blks">
                   <li>{mycr.li}</li>
                </div>
            </Link>
        ))}
    </div>
);
export default MyCourse;