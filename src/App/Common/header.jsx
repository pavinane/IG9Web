import React from 'react';
import {BusinessSec,Icons} from './Businesection';
import {List} from './catelist';
import {Dev,Dev2} from './capoption';
import logo from '../images/logo.jpg';
import image1 from '../images/img10.jpg';
import './headers.scss';

export  const ProfileHeader =  () => (
    <div id="header-blok">  
        <div className="header-section">
            <img src={logo} alt=""/>
            <ListName/>         
            <div className="header-search-home">
                <input type="text" placeholder="Search for anything"/>
                <i class="fas fa-search"/>
            </div>
            <BusinessSec
            bussec={[
                {
                    name:"IG9 for business",
                    head:"Get your team access to over 4,000 top Udemy courses, anytime, anywhere.",
                    btn:"try IG9 for Business"
                },
                {
                    link:"/instructor",
                    name:"instructor",
                    head:"Turn what you know into an opportunity and reach millions around the world.",
                    btn:"learn more"
                },
                {
                    name:"My Course",
                    prtid:"buss-id",
                    bshov:"buss-hov-id",
                    couid:"course-id",
                    img:image1,
                    head:"Learn Ethical Hacking in 2020: Beginner to Advanced!.",
                    btn:"my course"
                },
            ]}
            />
            <Icons
            icpro={[
                {
                    iconname:"far fa-heart",
                    cont:"your wishlist is empty",
                    par:"explore courses"

                },
                {
                iconname:"fas fa-shopping-cart",
                cont:"your cart is empty",
                par:"keep shopping"
               },
                {
                iconname:"far fa-bell",
                cont:"notification",
                par:"settings",
                id:"icbl",
                blk:"ic-not",
                not:"no notification"
                 },
            ]}
            />
            <div id="prof-icon">
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
                <li>Personal development
                <i class="fas fa-angle-right"/>
                </li>
                <li>design
                <i class="fas fa-angle-right"/>
                </li>
                <li>marketing
                <i class="fas fa-angle-right"/>
                </li>
                <li>life style
                <i class="fas fa-angle-right"/>
                </li>
                <li>photography
                <i class="fas fa-angle-right"/>
                </li>
                <li>health & fitness
                <i class="fas fa-angle-right"/>
                </li>
                <li>music
                <i class="fas fa-angle-right"/>
                </li>
                <li>teaching & academics
                <i class="fas fa-angle-right"/>
                </li>
               
              </ul>
          </div>
          </li>
         
    </div>
  );