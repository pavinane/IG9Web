import React from 'react';
import image1 from '../images/cate1.jpg';
import image2 from '../images/cate2.jpg';
import image3 from '../images/cate3.jpg';
import image4 from '../images/cate4.jpg';
import image5 from '../images/cate5.jpg';
import image6 from '../images/cate6.jpg';
import image7 from '../images/cate7.jpg';
import image8 from '../images/cate8.jpg';
import prsn from '../images/prsn1.jpg';
import './coursecate.scss';
    


const Topcate = () => (
    <div className="top-cate-section">
        <div className="top-cate">
            <h1>Top cetegories</h1>
            <Imagecate
            imgcate ={[
                {
                    img:image1,
                    name:"design"
                },
                {
                    img:image2,
                    name:"development"
                },
                {
                    img:image3,
                    name:"marketing"
                },
                {
                    img:image4,
                    name:"IT and Software"
                },
                {
                    img:image5,
                    name:"personal development"
                },
                {
                    img:image6,
                    name:"business"
                },
                {
                    img:image7,
                    name:"photography"
                },
                {
                    img:image8,
                    name:"music"
                },
            ]}
            />
        </div>
        <Topcateblock
        tcblk = {[
            {
               image:prsn,
               head:"Become an instructor",
               para:"Top instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.",
               btn:"start teaching today"
            }
        ]}
        />
       
        <Logosblock
        lgblk = {[
            {
                log1:"https://i.udemycdn.com/partner-logos/booking-logo.svg",
                log2:"https://i.udemycdn.com/partner-logos/volkswagen-logo.svg",
                log3:"https://i.udemycdn.com/partner-logos/mercedes-logo.svg",
                log4:"https://i.udemycdn.com/partner-logos/pinterest-logo.svg",
                log5:"https://i.udemycdn.com/partner-logos/adidas-logo.svg",
                log6:"https://i.udemycdn.com/partner-logos/eventbrite-logo.svg",
            },
            
        ]}
        />
        <Topcateblock2
        tcblk = {[
            {
               head:"Udemy for Business",
               para:"Get unlimited access to 4,000+ of Udemy’s top courses for your team. ",
               btn:"get IG9  for business"
            }
        ]}
        />
        <div className="moti-course-video">
            <div className="cour-video-blk">
               
                <div className="video-sec">
                    <img src={image1} alt=""/>
                </div>
                <div className="video-sec-2">
                    <h1>Udemy for Business</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
        </div>

    </div>
)
 
const Logosblock = ({lgblk}) => (
    <div className="logos">
        {lgblk.map (lgo => (
            <div className="logos-block">
                 <h1> Trusted by companies of all sizes</h1>
                <div className="logo-block-2">
                    <img alt="booking" src={lgo.log1} width="120" height="26"/>
                    <img alt="volkswagen" src={lgo.log2} width="75" height="26"/>
                    <img alt="mercedes" src={lgo.log3} width="120" height="26"/>
                    <img alt="pinterest" src={lgo.log4} width="120" height="26"/>
                    <img alt="adidas" src={lgo.log5} width="75" height="26"/>
                    <img alt="evenbrite" src={lgo.log6} width="120" height="26"/>
                </div>
            </div>
        ))}
    </div>
)
const Topcateblock = ({tcblk}) => (
    <div className="top-cate-section2">
        {tcblk.map (cateblk => (
            <div className="cate-sec2-block">
                <div id="cate-sec2-blk">
                    <img src={cateblk.image} alt=""/>
                    <div className="tc-sec2-block-content">
                        <h1>{cateblk.head}</h1>
                        <p> {cateblk.para} </p>
                        <button id="t-c-btn" type="button">{cateblk.btn}</button>
                    </div>
                </div>
                
            </div>
        ))}
    </div>
    
)
const Topcateblock2 = ({tcblk}) => (
    <div className="top-cate-section3">
        {tcblk.map (cateblk => (
            <div className="cate-sec2-block1">
                <div id="cate-sec2-blk1">
                    <div className="tc-sec2-block-content1">
                        <h1>{cateblk.head}</h1>
                        <p> {cateblk.para} </p>
                        <button id="t-c-btn1" type="button">{cateblk.btn}</button>
                    </div>
                    <img src="https://img-a.udemycdn.com/home/non-student-cta/udlite-lohp-promo-ufb.jpg" alt=""/>
                </div>                
            </div>
        ))}
    </div>
    
)


const  Imagecate = ({imgcate}) => (
        <div className="top-cate-img-sec">
            {imgcate.map (cateimg => (
                <div className="top-cate-img-sec1">
                    <img src={cateimg.img} alt=""/>
                    <h1>{cateimg.name}</h1>
                </div>
            ))}
            
        </div>
)
export default Topcate;