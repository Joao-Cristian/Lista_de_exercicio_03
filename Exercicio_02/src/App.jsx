import './App.css'
import Pai from './components/Pai'

function App() {
  const nome="Texto Filho";
  return(
    <>
      <Pai filho={nome}/>
    </>
  )  
}  

export default App
