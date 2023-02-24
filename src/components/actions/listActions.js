
import { ADD_TO_FAVOURITE,REMOVE_ITEM} from './action-types/list-actions'

//add item action
export const addItem= (id)=>{
    return{
        type: ADD_TO_FAVOURITE,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}

