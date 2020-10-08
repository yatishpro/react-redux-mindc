import {
    OPEN_SIDE_BAR,
    CLOSE_SIDE_BAR,
    LOGIN_AS_STUEDENT_ACTION,
    LOGOUT_AS_STUDENT_ACTION,
    } from "../actions/types";

const initialState = {
    isLoggedIn: true,
    showSideDrawer: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case OPEN_SIDE_BAR:
            return {
                ...state,
                showSideDrawer: action.payload.status
            };
        case CLOSE_SIDE_BAR:
            return {
                ...state,
                showSideDrawer: action.payload.status
            };
        case LOGIN_AS_STUEDENT_ACTION:
            return  {
                ...state,
                isLoggedIn: action.payload.status
            };
        case LOGOUT_AS_STUDENT_ACTION:
            return {
                ...state,
                isLoggedIn: action.payload.status
            }
        default: return state;
    }

}