import {character} from '../actions/index';

const initialState = {
    characters: []
};



export default function Reducer(state=initialState,action) {
    switch(action.type){
        case character:
            return{
                ...state,
                characters:action.payload
            }
    default: return state
    }
    
       
    
}
