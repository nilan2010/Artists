import Item1 from '../../images/1.jpeg'
import Item2 from '../../images/2.jpeg'
import Item3 from '../../images/3.jpeg'
import Item4 from '../../images/4.jpeg'
import Item5 from '../../images/5.jpeg'
import Item6 from '../../images/6.jpeg'
import { ADD_TO_FAVOURITE,REMOVE_ITEM } from '../actions/action-types/list-actions'


const initState = {
    items: [
        {id:1,title:'Will Smith', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img:Item1},
        {id:2,title:'Vin Diesel', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: Item2},
        {id:3,title:'Leonardo DiCaprio', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",img: Item3},
        {id:4,title:'Arnold Schwarzenegger', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img:Item4},
        {id:5,title:'Rajini Kanth', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", img: Item5},
        {id:6,title:'Ajay Devgan', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",img: Item6}
    ],
    addedItems:[],
    total: 0

}


const listReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_FAVOURITE){
          let addedItem = state.items.find(item=> item.id === action.id)

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem]

            }
            

    }
    if(action.type === REMOVE_ITEM){
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        return{
            ...state,
            addedItems: new_items
        }
    } else{
    return state
    }
    
}

export default listReducer
