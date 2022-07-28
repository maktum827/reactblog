import {
    ALL_POSTS_REQUEST,
    ALL_POSTS_SUCCESS,
    ALL_POSTS_FAIL,
    CLEAR_ERRORS

} from '../constants/postConstants'

export const postsReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case ALL_POSTS_REQUEST:
            return {
                loading: true,
                posts: []
            }

        case ALL_POSTS_SUCCESS:
            return {
                loading: false,
                // Getting all posts those are sent from backend by res.status in postController.js 
                posts: action.payload.posts,
            }

        case ALL_POSTS_FAIL:
            return {
                loading: false,
                // if failed then not getting anything from backend
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}