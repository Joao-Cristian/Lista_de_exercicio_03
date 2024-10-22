import './App.css'
import GaleriaImagem from './components/GaleriaImagem'

function App() {
  const ListaImagens = 
  [
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vIrXh1oXN4atiMRxRXrfhiY7zll3_t-sJQ&s', alt: 'Cachorro branco usando roupa de autronauta branca na pisando as quadra patas na lua'},
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrI6k3YqE86iJLr3JKO8Joxd7R8zoqm8pu1A&s', alt: 'Paisagem para a estatua gigante do cristo redentor'},
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGeDdl0s9I-uILsDfPFPERCYVU855Mg6DKvg&s', alt: 'Coruja encarando a câmera na dentra da floresta'}
  ]

  return (
    <>
      <GaleriaImagem imagens={ListaImagens}/>
    </>
  )
}

export default App
