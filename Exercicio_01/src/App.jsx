import './App.css'

function App() {

    const nomes = ['João','Maria','Andrea','Karen','Susana']
    const listaNomes=nomes.map(
      (nome)=>
        <li>{nome}</li>
    )

    return (
    <>
      <ul>{listaNomes}</ul>
    </>
  )
}

export default App
