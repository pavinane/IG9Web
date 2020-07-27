import React from 'react';
import "./Home.scss";
import logo from '../images/logo.jpg';
import Course from './course_box';
import Studentviews from './Studentview';
import Topcate from './Coursecategories';

const Header = () => (
    <div className="header-block-1">
    <div className="header-homepage">
        <img src={logo} alt=""/>
        <h2>categories</h2>
        <div className="search-home">
            <input type="text" placeholder="Search for anything"/>
            <i class="fas fa-search"/>
        </div>
        <h2>G9 for business</h2>
        <h2>Tech on G9</h2>
        <i class="fas fa-shopping-cart"></i>
        <div className="account">            
            <button id="log" type="button">log in</button>
            <button id="sign" type="button">Sign up</button>
        </div>  

    </div> 
    <Box/>
    </div>

);



const Box = () => (
    <div className="quick-search-box">
        <div className="search-box-1">
            <h1>Learn on your <br/> Schedule</h1>
            <p>Anywhere,anytime .Start learning today!</p>
            <div className= "box-input">
                 <input type="text" placeholder="What do you want to learn?"/>
                 <i class="fas fa-search"/>
            </div>
        </div>
    </div>
);

class Home extends React.Component {
    render() {
        return(
            
            <div className="header-block">
                <Header/>
                <Course/>
                <Studentviews/>
                <Topcate/>
            </div>
                      
            
        );
    }
}




 
export default Home;