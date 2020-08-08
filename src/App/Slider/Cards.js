import React from 'react'
import './slider.scss';

const Card = ({ clis }) => (
    <div className="ima-box-block">
      {clis.map(imbx => (
       
          <div className="cate-block-1">
            
            <img src={imbx.img} alt=""/>
            <div className="bu-con-1">
              <h1>{imbx.head}</h1>
              <p>{imbx.author}</p>
           </div>
           <div className="bu-ratings">
               <div id="rat-box">
                <h1>{imbx.rat} </h1>
               <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                </div>
                <p>{imbx.views}</p>
                </div> 
          </div>
            <div id="pri">
                    <h2><i class="fas fa-rupee-sign"/>{imbx.price} </h2>
                    <p><i class="fas fa-rupee-sign"/>{imbx.strike}</p>
            </div>
             <button id={imbx.butntype}type="button">{imbx.but} </button>
            </div>
      ))}
    </div>
  );

// const styles = {
//     card: {
//         width:'350px',
//         height:'200px',
//         backgroundColor:'blue',
//         border:'2px solid black',
//         borderSizing:'border-box',
//         fontsize:'2.5em',
//         color:'white'
//     }
// }
export default Card;
