import {
    OPEN_SIDE_BAR,
    CLOSE_SIDE_BAR,
    LOGIN_AS_STUEDENT_ACTION,
    LOGOUT_AS_STUDENT_ACTION
    } from './types';

export const openSideBar = () => ({
        type:OPEN_SIDE_BAR,
        payload:{
            status: true
        }
    })

export const closeSideBar = () => ({
    type: CLOSE_SIDE_BAR,
    payload: {
        status: false
    }
})

export const logginAsStudent = (data) => ({
    type: LOGIN_AS_STUEDENT_ACTION,
    payload: {
        status: true
    }
})

export const logoutAsStudent = () => ({
    type: LOGOUT_AS_STUDENT_ACTION,
    payload: {
        status: false
    }
})