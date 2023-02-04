import axios from 'axios'
import React from 'react'
import "./Search.css"

function Search({setCharacters}) //{setCharacters} is a passed prop from Homepage 
{
    //create state to hold search input

    const[searchValue, setSearchValue] = React.useState("")

    const handleChange = (e) => {
        //store the input
        setSearchValue(e.target.value)
    }


    //FILTER ENDPOINT API
    //https://rickandmortyapi.com/api/character/?name=rick

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents default behaviour of form refreshing the page after submit
        console.log(searchValue)
        //call API to get matching characters
        axios.get(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
        .then(res=>{
          //calls on the function state from Homepage component to manipulate
          //what i displayed on the Homepage based on search result
          setCharacters(res.data.results)
          //clears the textbox after hitting submit by setting search value to empty string
          setSearchValue('')

        })
        .catch(err=> {
          //if statement with an alert trigger if no matching values are found
          if(err.response.status === 404) {
            alert("No Matching Characters!")
          }
          else{
            console.log(err)
          }
        })
    }
  return (
    <form className='search-container'
          onSubmit={handleSubmit}>
        <input type="text"
               onChange={handleChange}
               //onChange={(e)=>setSearchValue(e.target.value)} //alternative code for onChange
               value={searchValue}
               placeholder='Search all characters'></input>


    </form>
  )
}

export default Search