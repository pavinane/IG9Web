import React from 'react';
import logo from '../images/logo.jpg';
import './main.scss';
import Caregories from './catelist';
import Poster from './Posterbody';
import Blocks from './Block';
import {Footer} from '../Course/Coursecategories'
import{BrandTag} from '../Course/Login'
import {Tech} from './CourseBlock'
import {Development,Business,IT,Office,Design,Marketing,Health,Music} from './capoption';
import {List} from '../Ig9/catelist';
import {Dev,Dev2} from '../Ig9/capoption'

const Mainpage = () => (
    <div className="main-page">
        <Header1/>
        <Productlist/>``
        <Poster/>
        <Blocks/>
        <Tech/>
       < BrandTag/>
        <Footer/>
    </div>
)

export default Mainpage;


const Header1=  () => (
    <div id="header-blok">
        
        <div className="header-section">
            <img src={logo} alt=""/>
            <ListName/>         
            <div className="header-search-home">
                <input type="text" placeholder="Search for anything"/>
                <i class="fas fa-search"/>
            </div>
            <div id="head-sec-lft">
                <h2>G9 for business</h2>
                <h2>Tech on G9</h2>
                <h2>My Course</h2>
            </div>
            <div className="icon-prof">
                <i class="far fa-heart"/>
                <i class="fas fa-shopping-cart"/>
                <i class="far fa-bell"/>
                <h1>p</h1>
            </div>
        </div>
        
    </div>
);
export const ListName = () => (
    <div className="list-sec">
          <li className="name-cate">
            categories
            <div className="list-sec-1">
              <ul id="list-block">
                <li id="dev">development
                <i class="fas fa-angle-right"/>
                <List data={Dev} />
                </li>
                <li id="dev">Business
                <i class="fas fa-angle-right"/>
                <List data={Dev2} />
                </li>
                <li>Finance & Accounting
                <i class="fas fa-angle-right"/>
                </li>
                <li>IT & Software
                <i class="fas fa-angle-right"/>
                </li>
                <li>Office Production
                <i class="fas fa-angle-right"/>
                </li>
              </ul>
          </div>
          </li>
         
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
)