import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import ageCounterReducer from "./ageCounter/ageCounterReducer";
import postReducer from "./posts/postReducer"

const rootReducer = combineReducers({
    count: counterReducer,
    age: ageCounterReducer,
    posts: postReducer
});

export default rootReducer;