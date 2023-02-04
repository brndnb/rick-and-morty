import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./Homepage.css"
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Search from '../../components/Search/Search'
function Homepage() {

    //create state for characters
    const [characters, setCharacters] = useState([])

    useEffect(
        ()=>{
           axios.get("https://rickandmortyapi.com/api/character")
           .then (response=>{
                setCharacters(response.data.results)


           })
           .catch(err => console.log(err))

        },[]


    ) // end of useEffect


  return (
    <div className='home-container'>
        <Search setCharacters={setCharacters}/>
        <h1>Main Characters</h1>
        <div className='characters-container'>
        {
            characters.map(item=><CharacterCard 
                                  character={item}
            />

            )
        }
        </div>
    </div>
  )
}

export default Homepage