import { useReducer } from "react";

const initialState = {
    isPlaying: false,
    musicSecon: 0,
    musicDuration: 0,
}
export const playerReducer = (state, action) => {
    switch(action.type){
        case 'toggle-play':
            return {...state, isPlaying: !state.isPlaying}
        case 'time-update':
            return {...state, musicSecon: action.payload}
        case 'time-duration':
            return {...state, musicDuration: action.payload}
        case 'ended':
            return {...state, isPlaying: false}
        default:
            return state
    }
}
export const usePlayerReducer = () => {
    const [state, dispatch] = useReducer(playerReducer, initialState)
    return {state, dispatch}
}