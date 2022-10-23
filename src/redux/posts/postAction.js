import {SET_POSTS,SET_LOADING,SET_ERROR }from "./postActionType"

export const setPosts=(posts)=>{
    return{
        type:SET_POSTS,
        payload:posts
    }
}
export const setLoading=(loading)=>{
    return{
        type:SET_LOADING,
        payload:loading
    }
}
export const setError=(error)=>{
    return{
        type:SET_ERROR,
        payload:error
    }
}
export const fetchPosts=()=>{
    return function(dispatch){
        dispatch(setLoading(true))
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                dispatch(setPosts(data))
                dispatch(setLoading(false))
                dispatch(setError(null))
            }).catch(err => {
                dispatch(setError(err.message))
                dispatch(setLoading(false))
            });
    }
}