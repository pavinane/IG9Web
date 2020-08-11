import React from 'react';
import {ProfileHeader} from '../Common/header';
import illu2 from '../images/illu2.svg'
import ill1 from '../images/illu1.svg';
import { Switch, Route, Link } from "react-router-dom";
import './tech.scss';


const Businesblk = () => (
  <div className="bus-blk-page">
        <ProfileHeader/>
        <TechBlks/>
        <Reach/>
  </div>  
);

const TechBlks = () => (
    <div className="tech-blks">
        <div className="tech-blk-sec">
            <div className="tec-blk-sec-1">
                <h1>Make a globel impact</h1>
                <p>Create an online video course and earn money by teaching people around the world.</p>
                <button className="instruc btn-danger" type="button">Become an instrctor </button>
            </div>
        </div>
        <div className="discov-hed">
            <h1 >Discover your potential</h1>
            <Discover
            disc ={[
                {
                    
                    sym:"far fa-money-bill-alt",
                    icname:"Earn money",
                    par:"Earn money every time a student purchases your course. Get paid monthly through PayPal or Payoneer, it’s your choice."
                },
                {
                    sym:"fab fa-youtube",
                    icname:"Inspire students",
                    par:"Help people learn new skills, advance their careers, and explore their hobbies by sharing your knowledge."
                },
                {
                    sym:"far fa-thumbs-up",
                    icname:"Join your community",
                    par:"Take advantage of our active community of instructors to help you through your course creation process."
                },
            ]}
            />
        </div>
        <div className="opportunity">
            <h1>Exceptional opportunities</h1>
            <Oppur
            oppou ={[
                {
                    num:"50m",
                    name:"Students worldwide"
                },
                {
                    num:"60+",
                    name:"Different languages"
                },
                {
                    num:"295m",
                    name:"Course enrollments"
                },
                {
                    num:"190+",
                    name:"Countries taught"
                },
                {
                    num:"5000+",
                    name:"Enterprise Customers"
                },
            ]}
            />
        </div>
        <Envision/>
    </div>
);

const Envision = () => (
    <div className="envision-blk-sec">
        <h1 id="eni-hd">Envision your success</h1>
        <div className="envi-sec-1">
           <Envisuc
           envilogo={[
               {    
                   link:'/techig9',
                   icon:"fas fa-mouse-pointer",
                   num:"1",
                   icna:"Plan your course"
               },
               {    
                link:'/techig9/video',
                icon:"fas fa-video",
                num:"2",
                icna:"Record your video"
               },
               {    
                link:'/techig9/chat',
                icon:"far fa-comment",
                num:"3",
                icna:"Build your community"
               },
           ]}
           /> 
        </div>
        <div className="envi-sec-2">
            <Switch>
            <Route
                exact
                path="/techig9"
                component={PlanCourse}
              />
               <Route
                exact
                path="/techig9/video"
                component={VideoCourse}
              />
               <Route
                exact
                path="/techig9/chat"
                component={PlanCourse}
              />
            </Switch>
        </div>
    </div>
);

const PlanCourse = () => (
    <div className="plan-course">
        <div className="plan-course-blk-1">
            <h1>Plan your course</h1>
            <p>Get organized </p>
            <p>You start with your passion and knowledge. Then choose a topic and plan your lectures in Google Docs, Microsoft Excel, or your favorite notebook. </p>
            <p>You get to teach the way you want — even create courses in multiple languages and inspire more students.</p>
             <p> How we help you </p>
             <p>  Udemy offers free courses on how to build your own course, complete with worksheets and real-world examples. Plus, our instructor dashboard and curriculum pages help keep you on track.</p>
               </div>
        <img src={ill1} alt=""/>

    </div>
);
const VideoCourse = () => (
    <div className="plan-course">
        <div className="plan-course-blk-1">
            <h1>Record your video</h1>
            <p>Get organized </p>
            <p>You start with your passion and knowledge. Then choose a topic and plan your lectures in Google Docs, Microsoft Excel, or your favorite notebook. </p>
            <p>You get to teach the way you want — even create courses in multiple languages and inspire more students.</p>
             <p> How we help you </p>
             <p>  Udemy offers free courses on how to build your own course, complete with worksheets and real-world examples. Plus, our instructor dashboard and curriculum pages help keep you on track.</p>
        </div>
        <img src={illu2} alt=""/>

</div>
);

const Envisuc = ({envilogo}) => (
    <div className="envi-logo">
        {envilogo.map(envlo => (
            <Link to = {envlo.link}>
                <div className="envi-blk-sec">
                    <i class={envlo.icon}/>
                      <p> <span>{envlo.num}</span>{envlo.icna} </p>
                </div>
            </Link>
        ))}
    </div>
);

const Oppur = ({oppou}) => (
    <div className="oppour-blk">
        {oppou.map(opp => (
            <div className="oppur-sec">
                <h1>{opp.num}</h1>
                 <p>{opp.name}</p>
            </div>
        ))}
    </div>
);
 
const Discover = ({disc}) => (
    <div className="discover">
                {disc.map (dis => (
                    <div className="disc-sec-blk">
                        <i class={dis.sym}/>
                        <h3>{dis.icname}</h3>
                        <p>{dis.par}</p>
                    </div>
                  
                ))}
    </div>
);

const Reach = () => (
    <div className="expand-reach-box">
        <div className="expand-reach-sec">
            <h1> Expand your reach</h1>
            <p>We've changed lives by connecting instructors with students around the world.</p>
        </div>
      <ReachBox
      rechbox = {[
          {
            par:"Udemy has given me the opportunity to reach a global audience for my classes that wouldn’t have been possible otherwise."
          },
          {
            par:"Udemy has given me the opportunity to reach a global audience for my classes that wouldn’t have been possible otherwise."
          },
          {
            par:"Udemy has given me the opportunity to reach a global audience for my classes that wouldn’t have been possible otherwise."
          },
      ]}
      />
    </div>
);

const ReachBox = ({rechbox}) => (
    <div className="reach-boxs">
        {rechbox.map(recbx => (
            <div className="reach-box-1">
                <p>{recbx.par}</p>
                <div className="reach-prof">
                    <img src={recbx.img} alt=""/>
                    <span>{recbx.prof}</span>
                </div>
            </div>
        ))}
            
        </div>
)

export default Businesblk;