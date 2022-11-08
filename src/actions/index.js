import axios from "axios"

export const character = "GET_CHARACTERS"


export const fetchCharacters=(name,page) =>{
    return async(dispatch)=>{
        console.log(name)
        if(name){
            var character = await axios.get(`https://swapi.dev/api/people/?search=${name}`)
        }
        else if(page) {
             character = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
        } else{
            character = await axios.get(`https://swapi.dev/api/people/?format=json`)
        }
        dispatch(actionDispatcher(character.data))
    }
    
}

const actionDispatcher=(payload)=>{
    return {
        type: character,
        payload
    }
}