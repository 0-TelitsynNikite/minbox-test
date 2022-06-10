import { ADD_COMPLETE, ADD_POST, REMOVE_COMLETE, REMOVE_POST } from '../types/types'

export const addPost = payload => ({type: ADD_POST, payload})
export const addComplete = payload => ({type: ADD_COMPLETE, payload})
export const removeComlete = payload => ({type: REMOVE_COMLETE, payload})
export const removePost = payload => ({type: REMOVE_POST, payload})