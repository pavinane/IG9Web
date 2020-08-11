import React from 'react';

import './main.scss';
import Caregories from '../Common/catelist';
import Poster from './Posterbody';
import Blocks from './Block';
import {Footer} from '../Common/Footer';
import{BrandTag} from '../Course/Login'
import {Tech} from './CourseBlock'
import {Development,Business,IT,Office,Design,Marketing,Health,Music} from '../Common/capoption';
import {ProfileHeader} from '../Common/header';


const Mainpage = () => (
    <div className="main-page">
        <ProfileHeader/>
        <Productlist/>
        <Poster/>
        <Blocks/>
        <Tech/>
       < BrandTag/>
        <Footer/>
    </div>
)






const Productlist  = () => (
    <div className="product-list">
       <ul id="pro-list-sec">
           <li id="develop">
               Development
               <Caregories data={Development}/>
           </li>
           <li id="business">
               Business
               <Caregories data={Business}/>
           </li>
           <li id="It">
               IT & Software
               <Caregories data={IT}/>
           </li>
           <li id="person-develop">
               personal development
               <Caregories data={Office}/>
           </li>
           <li id="design">
               Design
               <Caregories data={Design}/>
              
           </li>
           <li id="marketing">
               marketing
               <Caregories data={Marketing}/>
           </li>
           <li id="health">
               health & fitness
               <Caregories data={Health}/>
           </li>
           <li id="music">
               music   <Caregories data={Music}/>

           </li>
       </ul>
    </div>
);
export default Mainpage;