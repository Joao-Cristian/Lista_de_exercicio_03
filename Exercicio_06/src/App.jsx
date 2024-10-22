import './App.css'
import ParagrafoTexto from './components/ParagrafoTexto'

function App() {
  const retorno = true // troque para verdadeiro "true" e falso "false"
  return (
    <>
      <ParagrafoTexto prop={retorno}/>
    </>
  )
}

export default App
