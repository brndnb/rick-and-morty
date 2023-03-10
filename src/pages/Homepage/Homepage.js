import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import "./Homepage.css"
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Search from '../../components/Search/Search'
import { ThemeContext } from '../../contexts/ThemeContext'

function Homepage() {

    //create state for characters
    const [characters, setCharacters] = useState([])

    //extract theme values
    const {darkMode, setDarkMode} = useContext(ThemeContext)

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
    <div className={darkMode?'homepage-container home-dark' : 'homepage-container'}>
      
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