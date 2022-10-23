
import { INCREMENT_AGE,DECREMENT_AGE,RESET_AGE } from "./ageCounterActionType";
export const incrementAge =()=>{
return{
    type:INCREMENT_AGE
   
}
};
export const decrementAge =()=>{
return{
    type:DECREMENT_AGE
   
}
};
export const resetAge =()=>{
return{
    type:RESET_AGE
   
}
};