import { ADD_POST, ADD_COMPLETE, REMOVE_POST, CHANGE_LIST } from "../types/types"

type TState = {
    posts: [...{textOfTheTask: string, id: number, dateOfCreation?: Date, completed: boolean}[]],
    completedPosts: [...{textOfTheTask: string, id: number, dateOfCreation: Date, completed: boolean}[]],
    completed: boolean
}

const initialState: TState = {
    posts: [],
    completedPosts: [],
    completed: false
}

export default function rootReducer(state = initialState, action: any) {
    switch(action.type) {
        case ADD_POST: 
            return {...state, posts: [...state.posts, action.payload]}
        case REMOVE_POST: 
            return {...state, posts: state.posts.filter(item => item.id !== action.payload), completedPosts: state.completedPosts.filter(item => item.id !== action.payload)}
        case ADD_COMPLETE:
            return {...state, completedPosts: [...state.completedPosts, action.payload], posts: state.posts.filter(item => item.id !== action.payload.id)}
        case CHANGE_LIST: 
            return {...state, completed: !state.completed}
        default:
            return state
    }
}