import axios from 'axios'
import { useState } from 'react'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])

  const clickHandler = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000')
    .then(response=> response.data)
    .then(response => setPokemon(response.results))
  }



  return (
    <div>
        <button onClick={clickHandler}>Pokemon Go!!</button>
        <ul>
          {pokemon.length > 0 && pokemon.map((currentPokemon, index)=>{
            return (<li key={index}>{currentPokemon.name}</li>)
          })
          }
        </ul>
    </div>
  )
}

export default App
