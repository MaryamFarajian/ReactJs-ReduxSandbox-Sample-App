import{INCREMENT_AGE,DECREMENT_AGE,RESET_AGE}from "./ageCounterActionType";
const initialState={
    age:10
}
const ageCounterReducer=(state=initialState,action)=>{
switch(action.type){
    case INCREMENT_AGE:
    return{
        ...state,
        age:state.age+1
    };
    case DECREMENT_AGE:
    return{
        ...state,
        age:state.age-1
    }
    case RESET_AGE:
    return{
        ...state,
        age:0
    }
    default:
        return state
}
}
export default ageCounterReducer;