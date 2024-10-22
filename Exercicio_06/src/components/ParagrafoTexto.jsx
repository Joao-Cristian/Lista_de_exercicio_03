import React from "react";

function ParagrafoTexto({prop}){
    const estiloParagrafo = {color: 'red'}

    if (prop){
        return <p style={estiloParagrafo}>isHighlighted</p>
    }
    else{
        return <p>isHighlighted</p>
    }
}

export default ParagrafoTexto