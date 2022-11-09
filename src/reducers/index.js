import {character,homeworld} from '../actions/index';

const initialState = {
    characters: [],
    homeworld: [],
};



export default function Reducer(state=initialState,action) {
    switch(action.type){
        case character:
            return{
                ...state,
                characters:action.payload
            }
        case homeworld:
            return{
                ...state,
                homeworld:action.payload
            }
    default: return state
    }
    
       
    
}
