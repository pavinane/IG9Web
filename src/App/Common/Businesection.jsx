import React from 'react';
import './bussAndIcon.scss';
import {Link} from 'react-router-dom';


export const BusinessSec = ({bussec}) => (
    <div className="business-section">
        {bussec.map(busc =>(
             <div id="head-sec-lft">
                 <Link to ={busc.link}>
                <li id={busc.id}>{busc.name}
              
                    <div id={busc.prtid} className="bus-sec-prt">
                        <div id={busc.bshov} className="buss-sec-hov">
                            <div id={busc.couid}>
                                <img src={busc.img} alt=""/>
                                <h2>{busc.head}</h2>
                            </div>
                            <button className="btn-primary"  type="button">{busc.btn}</button>
                        </div>
                    </div>
                
                </li>
                </Link>
         </div>
        ))}
    </div>
);


export const Icons  = ({icpro}) => (
    <div className="icon-pro-sec">
        {icpro.map (icp => (
            <div className="icon-pro">
                <Link to={icp.link}>
                <li> <i class={icp.iconname}/>
                        <div className="icon-pro-blk">
                            <div id={icp.id} className="ic-blk-1">
                                 <div id={icp.blk}>
                                    <h2>{icp.cont}</h2>
                                    <p>{icp.par}</p>
                                 </div>
                                <span>{icp.not}</span>
                            </div>
                        </div>
                </li>
                </Link>
            
            </div>
        ))}
    </div>
)

