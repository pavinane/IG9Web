import React, { Component } from 'react'
import Cards from './Cards'; 
// import {ImageBox} from '../Course/course_box';
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';
import image4 from '../images/img4.jpg';
import image5 from '../images/img5.jpg';

 class HorizontalCarousel extends Component {
     constructor (props){
         super (props)

         this.state ={
            current_card:1
         }
     }

        componentDidMount () {
            let first_card_clone = this.card_container.children[0].cloneNode(true);
            let last_card_clone = this.card_container.children[this.card_container.children.length - 1 ].cloneNode(true);

            this.card_container.insertBefore(last_card_clone,this.card_container.children[0]);
            this.card_container.append(first_card_clone);

            this.card_container.style.transitionDuration ="0";
            this.card_container.style.transform =`translate(-${350}px)`;
        }

     handle_next = () => {
         if(this.state.current_card < this.card_container.children.length - 1) {

            let new_current_card = this.state.current_card + 1;

            this.setState({current_card:new_current_card}, () => {

            this.card_container.style.transitionDuration ="0.5s";
            this.card_container.style.transform =`translate(-${this.state.current_card})`;

            if(this.state.current_card === this.card_container.children.length - 1){

                setTimeout (() => {
                    this.card_container.style.transitionDuration ="0.0s";
                    this.card_container.style.transform =`translate(-${350}px)`;

                    this.setState({current_card:1})
                },502);

            }
                     
            });

         }else{
             return;
         }
         
     }
     handle_previous = () => {
        if(this.state.current_card > 0) {

            let new_current_card = this.state.current_card  - 1;

            this.setState({current_card:new_current_card}, () => {

            this.card_container.style.transitionDuration ="0.5s";
            this.card_container.style.transform =`translate(-${350 * this.state.current_card}px)`;

            if(this.state.current_card ===0){

                setTimeout (() => {
                    this.card_container.style.transitionDuration ="0.0s";
                    this.card_container.style.transform =`translate(-${350 * this.card_container.children.length - 2}px)`;

                    this.setState({current_card: this.card_container.children.length - 2})
                },502);
               
            }
                     
            });

         }else{
             return;
         }
     }
    render() {
        return (
            <div>
                <button onClick={this.handle_previous}>provious</button>
                <button onClick={this.handle_next}>next</button>
                <div className="view-port" style={styles.view_port}>
                    <div ref={ref_id => this.card_container = ref_id} className="card-container" style={styles.card_container}>
                    <Cards
        clis={[
            {
                img:image1,
                head:"The Complete SQL Bootcamp 2020: Go from Zero to Hero",
                author:"jose portilla",
                rat:"4.0",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"bs",
                but:"Bestseller"
            },
            {
                img:image2,
                head:"Tableau 20 Advanced Training: Master Tableau in Data Science ",
                author:"kirill Eremenko, Super Data Science Team",
                rat:"4.0",
                
                views:"(2000)",
                price:"455",
                strike:"(1850)",
                butntype:"hr",
                but:"Highest rated"
            },
            {
                img:image3,
                head:"An Entire MBA in 1 Course:Award Winning Business School Prof ",
                rat:"4.0",
                author:"Chris haroun",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"bs",
                but:"Bestseller"
            },
            {
                img:image4,
                head:"PMP Exam Prep Seminar - PMBOK Guide 6 ",
                rat:"4.0",
                author:"Joseph phillips",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"bs",
                but:"Bestseller"
            },
            {
                img:image5,
                head:"Beginner to Pro in Excel: Financial Modeling and Valuation ",
                rat:"4.0",
                author:"365 careers",
                views:"(1997)",
                price:"455",
                strike:"(1995)",
                butntype:"bs",
                but:"Bestseller"
            },
            

        ]}
    />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    view_port :{
       
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        width :'1300px',
        // height : "200px",
        backgroundColo:'red',
        overflow:"hidden"

    },
    card_container: {
        display:'flex',
        flexDirection:'row',
        width:'fit-content'
    }
}
export default HorizontalCarousel;
