import React from "react";

function Card({childen}){
   const cardStyle = {
    width: '100px',
    height: '100px',
    border: '2px solid black',    
   } 

   return(
        <div style={cardStyle}>
            {childen}
        </div>
   )
}

export default Card