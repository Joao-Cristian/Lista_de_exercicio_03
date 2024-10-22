import React from "react";

function Fragmentos(){
    const itens = ['Tarefa 1','Tarefa 2','Tarefa 3','Tarefa 4']

    return (
        <>
            <h1>Lista de itens</h1>
            <ul>
                {itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>Lista de realizar as tarefas</p>
        </>
    )
    
}

export default Fragmentos