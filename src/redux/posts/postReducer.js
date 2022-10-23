import {SET_POSTS,SET_LOADING,SET_ERROR }from "./postActionType"
const initialState = {
    loading: false,
    posts: [],
    error: null
}

 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default reducer