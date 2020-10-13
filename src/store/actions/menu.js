import * as actionTypes from './actionTypes'

export const toggleMenu = (boolean) => {
    console.log("TOGGLE_MENU" , boolean)
    return {
        type:actionTypes.TOGGLE_MENU,
        boolean:boolean
    }
}