import axios from 'axios';

import {
    ALL_POSTS_REQUEST,
    ALL_POSTS_SUCCESS,
    ALL_POSTS_FAIL,
    CLEAR_ERRORS

} from '../constants/postConstants'

export const getPosts = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_POSTS_REQUEST })

        // connecting with backend route 
        const { data } = await axios.get('/api/v1/post')
        console.log(data)

        // passing data to reducer by payload
        dispatch({
            type: ALL_POSTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        // passing error message to reducer by payload
        dispatch({
            type: ALL_POSTS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}