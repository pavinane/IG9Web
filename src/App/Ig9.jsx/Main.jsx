import React from 'react';
import logo from '../images/logo.jpg';
import './main.scss';


const Mainpage = () => (
    <div className="main-page">
        <Header1/>
    </div>
)

export default Mainpage;


const Header1 =  () => (
    <div className="header-section">
        <img src={logo} alt=""/>
        <h2>categories</h2>
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
)