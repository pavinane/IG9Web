import React from 'react';
import image1 from '../images/cate1.jpg';
import './coursecate.scss';
    


const Topcate = () => (
    <div className="top-cate">
        <h1>Top cetegories</h1>
        <Imagecate
        imgcate ={[
            {
                img:image1,
                name:"design"
            },
            {
                img:image1,
                name:"design"
            },
            {
                img:image1,
                name:"design"
            },
            {
                img:image1,
                name:"design"
            },
            {
                img:image1,
                name:"design"
            },
            {
                img:image1,
                name:"design"
            },
            {
                img:image1,
                name:"design"
            },
            {
                img:image1,
                name:"design"
            },
        ]}
        />
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