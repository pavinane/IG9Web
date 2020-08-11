import React from 'react';
import logo from '../images/logo.jpg';
import './footer.scss';

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