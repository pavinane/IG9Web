import React from 'react'

function Card (props) {
    return (
        <div style ={styles.card}>
            {props.card_number}
        </div>
    )
}

const styles = {
    card: {
        width:'350px',
        height:'200px',
        backgroundColor:'blue',
        border:'2px solid black',
        borderSizing:'border-box',
        fontsize:'2.5em',
        color:'white'
    }
}
export default Card;
