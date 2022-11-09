import axios from "axios"

export const character = "GET_CHARACTERS"
export const homeworld = "GET_HOMEWORLD"

export const fetchCharacters=(name,page,id) =>{
    return async(dispatch)=>{
        if(name){
            var character = await axios.get(`https://swapi.dev/api/people/?search=${name}`)
        }
        else if(page) {
             character = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
        }else if(id){
            character = await axios.get(`https://swapi.dev/api/people/${id}`)
        }else{
            character = await axios.get(`https://swapi.dev/api/people/?format=json`)
        }
        dispatch(actionDispatcherChars(character.data))
    }
    
}

const actionDispatcherChars=(payload)=>{
    return {
        type: character,
        payload
    }
}


export const fetchHomeworld = (character) => { 
    return async (dispatch) => {
        const homeworld = await axios.get(`${character.results[0].homeworld}`)
        console.log(homeworld)
        dispatch(actionDispatcherHomeWorld(homeworld))
    }
}

const actionDispatcherHomeWorld=(payload)=>{
    return {
        type: homeworld,
        payload
    }
}