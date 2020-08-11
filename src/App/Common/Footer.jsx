import React from 'react';
import logo from '../images/logo.jpg';
import './footer.scss';



export const BrandTag = () => (
    <div className="brand-box-block">
              <h1>Top companies choose <span>Ig9 for Business</span>  to build in-demand career skills.</h1>
              <div className="brand-name">
  
                  <img src="https://i.udemycdn.com/partner-logos/lyft-logo.svg" alt="" height="45"/>
                  <img src="https://i.udemycdn.com/partner-logos/pinterest-logo.svg" alt=""width="100" height="150"/>
                  <img src="https://i.udemycdn.com/partner-logos/adidas-logo.svg" alt=""width="60" height="50"/>
                  <img src="https://i.udemycdn.com/partner-logos/eventbrite-logo.svg" alt=""width="100" height="100"/>
                  <img src="https://i.udemycdn.com/partner-logos/surveymonkey-logo.svg" alt=""width="150" height="60"/>
                  <img src="https://i.udemycdn.com/partner-logos/booking-logo.svg" alt="" width="150" height="40"/>
              </div>
    </div>
);





export const Footer = () => (
    <div className="footer">
    <table>
       
        <tr id="table-list">
            <td>udemy for business</td>
            <td>careers</td>
            <td>terms</td>
        </tr>
        <tr id="table-list">
            <td>tech on udemy</td>
            <td>blog</td>
            <td>privacy policy and cookie policy</td>
        </tr>
        <tr id="table-list">
            <td>get the app</td>
            <td>help</td>
            <td>sitemap</td>
        </tr>
        <tr id="table-list">
            <td>about us</td>
            <td>affiliate</td>
            <td>featured course</td>
        </tr>
        <tr id="table-list">
            <td>contact us</td>
            
        </tr>
    </table>
    <select>
   
        <option value="english"> &#127760; english</option>
        <option value="hindi">hindi</option>
        <option value="deutsch">deutsch</option>
        <option value="roman">roman</option>
        <option value="french">french</option>
    </select>
    <img src={logo} alt="" width="50" height="50" />
    <p>&#169; 2020 Udemy, Inc. </p>
    
</div>
);