import './App.css'

function App() {
  const imagens = [    
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vIrXh1oXN4atiMRxRXrfhiY7zll3_t-sJQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrI6k3YqE86iJLr3JKO8Joxd7R8zoqm8pu1A&s',
    '',//Url vazio
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGeDdl0s9I-uILsDfPFPERCYVU855Mg6DKvg&s']
    const listaImagens=imagens.map(
      (image)=>
        <img src={image}/>
    )

  return (
    <>
      <ul>{listaImagens}</ul>
    </>
  )
}

export default App
