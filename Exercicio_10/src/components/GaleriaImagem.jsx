import React from "react";

function GaleriaImagem({imagens}){
    return (
        <div>
            {imagens.map((imagem) => (
              <img src={imagem.url} alt={imagem.alt}/>
            ))}
          </div>
    )
}
        


export default GaleriaImagem