import React from "react";

function Boolean({IS}){
    if (IS){
        return <p>IsVisible</p>
    }
    else{
        return <p></p>
    }
}

export default Boolean