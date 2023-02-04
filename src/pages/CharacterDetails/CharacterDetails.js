import React from 'react'
import "./CharacterDetails.css"
import {useParams} from "react-router-dom"
import axios from "axios"


function CharacterDetails() {
    //I need the id from the url
    const {id} = useParams();
    //create state for character data
     const[character, setCharacter] = React.useState()



    //https://rickandmortyapi.com/api/character/2

React.useEffect(
    ()=>{
        //call api to get info on character
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res =>{
            console.log(res)
            setCharacter(res.data)
        })
        .catch(err=>console.log(err))
    }, []
)

// The ? after characters forces the page to wait for the Async request to finish before loading
//This prevents errors with data not showing due to page loading before Async request finshes
  return (
    <div className='details-container'>
        <img src={character?.image}></img>
        <div className='char-info'>
            <h3>{character?.name}</h3>
            <ul>
                <li>{character?.gender}</li>
                <li>{character?.species}</li>
                <li>{character?.status}</li>
            </ul>
        </div>
    </div>
  )
}

export default CharacterDetails